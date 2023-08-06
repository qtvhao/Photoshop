let photoshop2023MacOS = '/Applications/Adobe Photoshop 2023/Adobe Photoshop 2023.app/Contents/MacOS/Adobe Photoshop 2023';

let child_process = require('child_process');
let fs = require('fs');
let path = require('path');

let startJSX = path.join(__dirname, 'Start.jsx');
child_process.execFile(photoshop2023MacOS, [startJSX], (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
});
