const spawn = require('child_process').spawn;

function setup (mode, callback) {
  var app = this.args[0]

  var data = '';
  spawn('cf', ['env', app], {})
    .on('error', function(err) {
      return callback(new Error('The cf command line could not be found'));
    })
    .on('close', function(code) {
      if (code) {
        return callback(new Error(
          'The cf API endpoint and login could not be verified'));
      }
      if (/BLUEMIX_APP_MGMT_ENABLE\:\sproxy\+devconsole\+inspector/.test(data)) {
        callback();
      } else {
        callback(
          new Error(
            'The proxy, devconsole and inspector are not enabled.'));
      }
    })
    .stdout.on('data', function(chunk) {
      data += chunk;
    });
}


function checkcf (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checkcf;
