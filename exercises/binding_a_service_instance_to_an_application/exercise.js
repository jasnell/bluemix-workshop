'use strict';

var exercise = require('workshopper-exercise')();
var checksvc = require('./checksvc');

exercise = checksvc(exercise);

exercise.addSetup(function (mode, callback) {
  process.nextTick(callback);
});

module.exports = exercise;
