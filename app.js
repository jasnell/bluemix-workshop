#!/usr/bin/env node

const workshopper = require('workshopper');
const path        = require('path');
const more        = require('workshopper-more');

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
    }
  ]
});
