#!/usr/bin/env node

const workshopper = require('workshopper');
const path        = require('path');
const more        = require('workshopper-more');
const open        = require('./open');

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
      short: 'm',
      handler: more
    },
    {
      name: 'open',
      menu: false,
      short: 'o',
      handler: open
    },
    {
      name: 'register',
      menu: true,
      short: 'r',
      handler: signup
    },
    {
      name: 'dashboard',
      menu: true,
      short: 'd',
      handler: dashboard
    },
    {
      name: 'solutions',
      menu: true,
      short: 's',
      handler: solutions
    },
    {
      name: 'catalog',
      menu: true,
      short: 'c',
      handler: catalog
    }
  ]
});
