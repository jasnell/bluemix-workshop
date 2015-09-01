#!/usr/bin/env node

const workshopper = require('workshopper');
const path        = require('path');
const more        = require('workshopper-more');
const open        = require('./open');
const pkg = require('./package.json');

const opn = require('open');

function signup(workshopper) {
  opn('https://console.ng.bluemix.net/registration/');
}
function dashboard(workshopper) {
  opn('https://console.ng.bluemix.net/?direct=classic/#/resources');
}
function catalog(workshopper) {
  opn('https://console.ng.bluemix.net/catalog/');
}
function solutions(workshopper) {
  opn('https://console.ng.bluemix.net/solutions/');
}
function whatis(workshopper) {
  opn('https://www.ng.bluemix.net/docs/');
}

workshopper({
  name        : 'bluemix-workshop',
  title       : 'A Developer\'s Guide to Bluemix',
  exerciseDir : path.join(__dirname, 'exercises'),
  appDir      : __dirname,
  footerFile  : false,
  commands    : [
    {
      name: 'more',
      menu: false,
      handler: more
    },
    {
      name: 'open',
      menu: false,
      handler: open
    },
    {
      name: 'what_is_bluemix',
      handler: whatis
    },
    {
      name: 'register',
      handler: signup
    },
    {
      name: 'dashboard',
      handler: dashboard
    },
    {
      name: 'solutions',
      handler: solutions
    },
    {
      name: 'catalog',
      handler: catalog
    }
  ]
});
