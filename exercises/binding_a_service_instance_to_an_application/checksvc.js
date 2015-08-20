// spawn cf and list the services available,
// grep the output to see if the named service is in the list and if it's
// an instance of rediscloud using the 30mb plan

const spawn = require('child_process').spawn;

function setup (mode, callback) {
  var service = this.args[1];
  var app = this.args[0];

  var data = '';
  spawn('cf', ['services'])
    .on('error', function(error) {
      return callback(new Error('Could not verify the bound services'));
    })
    .on('close', function(code) {
      if (code) {
        return callback(new Error('Could not verify the bound services'));
      }
      var regexp = new RegExp(service + '\\s*rediscloud\\s*30mb\\s*' + app);
      console.log(regexp);
      if (regexp.test(data)) {
        return callback();
      } else {
        return callback(new Error('Could not verify the bound service'));
      }
    })
    .stdout.on('data', function(chunk) {
      data += chunk;
    });
}

function checksvc (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checksvc;
