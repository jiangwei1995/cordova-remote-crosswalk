cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.disusered.open/www/disusered.open.js",
        "id": "com.disusered.open.Open",
        "merges": [
            "cordova.plugins.disusered"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.badge/www/badge.js",
        "id": "de.appplant.cordova.plugin.badge.Badge",
        "clobbers": [
            "plugin.notification.badge",
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.launchmyapp/www/ios/LaunchMyApp.js",
        "id": "nl.x-services.plugins.launchmyapp.LaunchMyApp",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    },
    {
        "file": "plugins/uk.co.whiteoctober.cordova.appversion/www/AppVersionPlugin.js",
        "id": "uk.co.whiteoctober.cordova.appversion.AppVersionPlugin",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ios/FileSystem.js",
        "id": "org.apache.cordova.file.iosFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
        "id": "org.apache.cordova.file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransferError.js",
        "id": "org.apache.cordova.file-transfer.FileTransferError",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
        "id": "org.apache.cordova.file-transfer.FileTransfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.disusered.open": "1.0.4",
    "cordova-plugin-crosswalk-webview": "1.2.0",
    "cordova-plugin-device": "1.0.0",
    "cordova-plugin-inappbrowser": "1.0.0",
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "de.appplant.cordova.plugin.badge": "0.6.4",
    "nl.x-services.plugins.launchmyapp": "3.2.2",
    "uk.co.whiteoctober.cordova.appversion": "0.1.7",
    "org.apache.cordova.file": "1.3.3",
    "org.apache.cordova.file-transfer": "0.5.0",
    "de.appplant.cordova.common.registerusernotificationsettings": "1.0.1"
}
// BOTTOM OF METADATA
});