'use strict';

var skillsCtrl = require('./skills.controller');

module.exports =
  angular.module('resume.app.skills', [

  ])
  .controller('skillsCtrl', skillsCtrl);
