'use strict';

var exercise = require('workshopper-exercise')();
exercise.requireSubmission = false;
exercise.addSetup(function (mode, callback) {
  process.nextTick(callback);
});

module.exports = exercise;
