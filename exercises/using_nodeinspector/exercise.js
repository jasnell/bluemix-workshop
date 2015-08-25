'use strict';

var exercise = require('workshopper-exercise')();
var checkcf = require('./checkcf');

exercise.requireSubmission = false;
exercise = checkcf(exercise);

exercise.addSetup(function (mode, callback) {
  process.nextTick(callback);
});

module.exports = exercise;
