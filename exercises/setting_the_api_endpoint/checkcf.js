const spawn = require('child_process').spawn;

function setup (mode, callback) {

  spawn('cf', ['target'], {})
    .on('error', function(err) {
      return callback(new Error('The cf command line could not be found'));
    })
    .on('close', function(code) {
      if (code) {
        return callback(new Error(
          'The cf API endpoint and login could not be verified'));
      }
      callback(); // todo: check version?
    });
}


function checkcf (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checkcf;
