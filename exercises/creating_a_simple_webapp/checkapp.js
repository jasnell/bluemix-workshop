// spawn npm start from the directory to launch the Webapp
// send a request to ensure it's up and running

const spawn = require('child_process').spawn;
const path = require('path');
const http = require('http');

function setup (mode, callback) {
  var submission = this.args[0];
  var wd = path.resolve(process.cwd(), submission);
  spawn('npm', ['start'], {cwd: wd})
    .on('error', function(err) {
      callback(new Error('The web app could not be started'));
    })
    .on('close', function(code) {
      if (code) {
        callback(new Error('The web app could not be started'));
      }
    })
    .stdout.on('data', function(chunk) {
      if (/^The server is running/.test(chunk)) {
        http.get('http://localhost:8888/', function(res) {
          if (res.statusCode === 200) {
            callback();
          } else {
            callback(new Error('The web app could not be accessed'));
          }
        });
      }
    });

}

function checkcf (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checkcf;
