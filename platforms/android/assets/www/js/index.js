var BASE_URL = 'http://192.168.0.187:3000';
var VERSION_BASE_URL = 'http://192.168.0.187:3000';
var VERSION_PATH = '/version';
var TARGET_PATH = '/';

var app = {

  _ready: Promise.pending(),
  _serverVersion: Promise.pending(),
  _currentVersion: Promise.pending(),
  _noUpdate: Promise.pending(),
  _network: Promise.pending(),

  updateURL: null,
  platform: null,

  initialize: function() {
    // Promise.longStackTraces();
    this.readyCheck();
    this.registerPromise();
  },

  registerPromise: function () {
    app._ready.promise.then(app.networkCheck);
    app._ready.promise.then(app.getCurrentVersion);
    app._ready.promise.then(app.getServerVersion);

    app._network.promise.catch(app.noConnection);

    Promise.all([
      app._currentVersion.promise,
      app._serverVersion.promise,
    ]).spread(app.versionCheck).catch(function () {
      console.log('version error:', arguments);
      app._noUpdate.resolve();
    });

    Promise.all([
      app._network.promise,
      app._noUpdate.promise
    ]).then(app.approve);
  },

  noConnection: function () {
    console.log('go offine');
    window.location.replace('no-connection.html');
  },

  readyCheck: function() {
    document.addEventListener('deviceready', function () {
      console.log('device ready');
      app._ready.resolve();
    }, false);
  },

  networkCheck: function () {
    var targetURL = app.getAppURL();
    console.log('checking:', targetURL);
    $.get(targetURL).then(function () {
      console.log('server ok');
      app._network.resolve();
    }, function (result) {
      console.log('server fault');
      app._network.reject();
    });
  },

  getCurrentVersion: function () {
    cordova.getAppVersion.getVersionNumber().then(function (result) {
      console.log('current version', result);
      app._currentVersion.resolve(result);
    });
  },

  getServerVersion: function () {
    var platform = device.platform.toLowerCase();
    var versionURL = VERSION_BASE_URL + VERSION_PATH + '/' + platform;

    console.log('checking server version:', versionURL);
    $.get(versionURL).then(function (result) {
      console.log('server version', result.version);
      app.updateURL = result.url;
      app._serverVersion.resolve(result);
    }, function () {
      app._serverVersion.reject();
    });
  },

  versionCheck: function (currentVersion, serverInfo) {
    var serverVersion = serverInfo.version;
    if (semver.lte(serverVersion, currentVersion)) throw new Error('no update');

    app.buildMessage(serverInfo);
    var confirmer = $('#confirm-download');
    navigator.splashscreen.hide();
    confirmer.modal('show');
  },

  buildMessage: function (serverInfo) {
    var version = serverInfo.version;
    var description = serverInfo.description;
    var list = serverInfo.features || [];
    var features = $('#features');
    $('#version').text(version);
    $('#description').text(description);
    list.forEach(function (item) {
      features.append('<li>' + item + '</li>');
    });
  },

  getAppURL: function() {
    return BASE_URL + TARGET_PATH;
  },

  update: function () {
    switch (device.platform.toLowerCase()) {
    case 'android':
      console.log('update Android');
      var safeURL = encodeURIComponent(app.updateURL);
      window.location.replace('download.html#' + safeURL);
      break;
    case 'ios':
      console.log('update iOS');
      window.location.replace(updateURL);
      break;
    }
  },

  approve: function () {
    var targetURL = app.getAppURL();
    console.log('launch app:', targetURL);
    window.location.replace(targetURL);
  }

};

app.initialize();
