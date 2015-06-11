var TEMPORARY_URL = 'cdvfile://localhost/temporary/preinstall.apk';

var Promise = require('bluebird');
var $ = require('jquery');

var app = {

  _ready: Promise.pending(),

  progressBar: $('#progress-bar'),
  progress: 0,

  initialize: function initialize() {
    this.readyCheck();
    this.registerPromise();
  },

  registerPromise: function registerPromise() {
    app._ready.promise.then(app.downloadAPK);
  },

  readyCheck: function readyCheck() {
    document.addEventListener('deviceready', function handleDeviceReady() {
      console.log('device ready');
      var downloadURL = decodeURIComponent(window.location.hash).substr(1);
      app._ready.resolve(downloadURL);
    }, false);
  },

  downloadAPK: function downloadAPK(url) {
    console.log('downloading:', url);
    var transfer = new FileTransfer();
    transfer.onprogress = app.onProgress;
    transfer.download(url, TEMPORARY_URL, app.installAPK, handleDownload);
    setInterval(app.updateProgressBar, 200);
    return;

    function handleDownload() {
      console.log('err:', arguments);
    }
  },

  updateProgressBar: function updateProgressBar() {
    app.progressBar.text(app.progress + '%');
    app.progressBar.width(app.progress + '%');
  },

  onProgress: function onProgress(progressEvent) {
    app.progress = Math.floor(progressEvent.loaded * 100 / progressEvent.total);
  },

  installAPK: function installAPK(entry) {
    cordova.plugins.disusered.open(entry.toURL(), app.ok, app.cancel);
  },

  ok: function ok() {
    console.log('ok');
    window.location.replace('./index.html');
  },

  cancel: function cancel() {
    console.log('cancel');
  }

};

app.initialize();
