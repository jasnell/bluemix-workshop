
const path = require('path');
const fs = require('fs');
const opn = require('open');

function open(workshopper) {
  var meta = workshopper.getExerciseMeta(workshopper.current);
  var openfile;

  if (!meta)
    return workshopper.error('No exercise selected');

  openfile = path.join(meta.dir, '/open.md');
  var data = '';
  fs.createReadStream(openfile)
    .on('error', function(err) {
      return workshopper.error('No additional information.');
    }).on('data', function(chunk) {
      data += chunk;
    }).on('end', function() {
      opn(data.trim());
    });
}

module.exports = open;
