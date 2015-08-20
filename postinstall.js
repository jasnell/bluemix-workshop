// thank you https://github.com/workshopper/goingnative/blob/master/postinstall.js
const path         = require('path');
const varstring    = require('varstring');
const getos        = require('getos');
const fs           = require('fs');
const after        = require('after');
const instructions = require('./exercises/install_cli/vars.json').instructions;


const tmpl    = path.join(__dirname, 'exercises/install_cli/problem.md.tmpl');
const out     = path.join(__dirname, 'exercises/install_cli/problem.md');
const problem = fs.readFileSync(tmpl, 'utf-8');

getos(function (err, os) {
  if (err)
    throw err;
  var lookup = (os.dist ? os.dist : os.os).toLowerCase();
  var markdown = varstring(problem, instructions[lookup] || instructions.other);
  fs.writeFileSync(out, markdown, 'utf8');
});
