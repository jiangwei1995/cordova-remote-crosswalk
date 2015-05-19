var TEMPORARY_URL = 'cdvfile://localhost/temporary/preinstall.apk';

var app = {

  _ready: Promise.pending(),

  progressBar: $('#progress-bar'),
  progress: 0,

  initialize: function() {
    this.readyCheck();
    this.registerPromise();
  },

  registerPromise: function () {
    app._ready.promise.then(app.downloadAPK);
  },

  readyCheck: function() {
    document.addEventListener('deviceready', function () {
      console.log('device ready');
      var downloadURL = decodeURIComponent(window.location.hash).substr(1);
      app._ready.resolve(downloadURL);
    }, false);
  },

  downloadAPK: function (url) {
    console.log('downloading:', url);
    var transfer = new FileTransfer();
    transfer.onprogress = app.onProgress;
    transfer.download(url, TEMPORARY_URL, app.installAPK, function () {
      console.log('err:', arguments);
    });
    setInterval(app.updateProgressBar, 200);
  },

  updateProgressBar: function () {
    app.progressBar.text(app.progress + '%');
    app.progressBar.width(app.progress + '%');
  },

  onProgress: function (progressEvent) {
    app.progress = Math.floor(progressEvent.loaded * 100 / progressEvent.total);
  },

  installAPK: function (entry) {
    cordova.plugins.disusered.open(entry.toURL(), app.ok, app.cancel);
  },

  ok: function () {
    console.log('ok');
    window.location.replace('./index.html');
  },

  cancel: function () {
    console.log('cancel');
  }

};

app.initialize();
