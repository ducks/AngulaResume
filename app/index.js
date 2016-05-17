'use strict';

var headCtrl = require('./header.controller');
var footCtrl = require('./footer.controller');

module.exports = 
  angular.module('resume.app', [
    require('./home').name,
    require('./skills').name,
    require('./projects').name,
    require('./contact').name
  ])
  .controller('headerCtrl', headCtrl)
  .controller('footerCtrl', footCtrl);
