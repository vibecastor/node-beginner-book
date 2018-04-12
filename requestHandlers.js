'use strict'

const exec = require('child_process').exec;

function start() {
  console.log("Request handler 'start' was called.");
  let content = 'empty';

  exec('ls -lah', function (error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

// function sleep(milliSeconds) {
//   let startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + milliSeconds);
// }

// sleep(10000);
// return 'Hello Start';

function upload() {
  console.log("Request handle 'upload' was called.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;