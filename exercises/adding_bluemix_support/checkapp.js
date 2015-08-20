// spawn npm start from the directory to launch the Webapp
// send a request to ensure it's up and running

const path = require('path');
const fs = require('fs');

function check_cfignore(wd, next) {
  var cfignore = path.resolve(wd, '.cfignore');
  var data = '';
  fs.createReadStream(cfignore)
    .on('error', function(err) {
      next(new Error('Cannot find .cfignore'));
    })
    .on('data', function(chunk) {
      data += chunk;
    })
    .on('end', function() {
      if (/^node\_modules$/.test(data.trim())) {
        next();
      } else {
        next(new Error('.cfignore does not contain node_modules'));
      }
    });
}

function check_manifest(wd, next, err) {
  if (err) {
    return next(err);
  }
  fs.stat(path.resolve(wd, 'manifest.yml'), function(err,stat) {
    if (err) {
      return next(new Error('Cannot find manifest.yml'));
    }
    next();
  });
}

function setup (mode, callback) {
  var submission = this.args[0];
  var wd = path.resolve(process.cwd(), submission);
  check_cfignore(wd,
    check_manifest.bind(null,wd,callback));
}

function checkcf (exercise) {
  exercise.addSetup(setup);
  return exercise;
}


module.exports = checkcf;
