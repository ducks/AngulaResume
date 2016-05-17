'use strict';

var projectsCtrl = require('./projects.controller');

module.exports =
  angular.module('resume.app.projects', [

  ])
  .controller('projectsCtrl', projectsCtrl);
