var workingFolder = new Folder("/Users/willwilson/VSCodeProjects/HungPTS");
var logFile = new File(workingFolder.fsName + "/log.txt");
function log(msg) {
    logFile.open("a");
    logFile.writeln(msg);
    logFile.close();
}
logFile.open("w");
logFile.writeln("Start");
logFile.close();
// photoshop extendscript
var zaloPCDir = new Folder("/Users/willwilson/Library/Application Support/ZaloPC/");
var zaloPCFiles = zaloPCDir.getFiles();
var zaloPCFilesCount = zaloPCFiles.length;
var zaloAccountDir;
for (var i = 0; i < zaloPCFilesCount; i++) {
    var isStartsWithNumber = zaloPCFiles[i].name.match(/^\d+/);
    if (isStartsWithNumber) {
        zaloAccountDir = zaloPCFiles[i].fsName;
    }
}
log(zaloAccountDir);
var zaloAccountDirFiles = new Folder(zaloAccountDir + "/ZaloDownloads/").getFiles();
var zaloAccountDirFilesCount = zaloAccountDirFiles.length;
for (var i = 0; i < zaloAccountDirFilesCount; i++) {
    // log(zaloAccountDirFiles[i].name);
    var zaloAccountDirFilesPath = zaloAccountDirFiles[i].fsName;
}
