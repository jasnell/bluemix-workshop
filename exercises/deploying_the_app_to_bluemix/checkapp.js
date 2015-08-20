// spawn npm start from the directory to launch the Webapp
// send a request to ensure it's up and running

const path = require('path');
const http = require('http');

function setup (mode, callback) {
  var submission = this.args[0];
  var url = require('util').format('http://%s.mybluemix.net', submission);
  http.get(url, function(res) {
    if (res.statusCode === 200) {
      callback();
    } else {
      callback(new Error('The web app could not be reached'));
    }
  });
}

function checkcf (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checkcf;
