'use strict';

var exercise = require('workshopper-exercise')();
var checkapp = require('./checkapp');

exercise = checkapp(exercise);

exercise.addSetup(function (mode, callback) {
  process.nextTick(callback);
});

module.exports = exercise;
