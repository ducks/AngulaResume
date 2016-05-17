'use strict';

var contactCtrl = require('./contact.controller');

module.exports =
  angular.module('resume.app.contact', [

  ])
  .controller('contactCtrl', contactCtrl);
