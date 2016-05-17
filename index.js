'use strict';

var angular = require('angular'),
    app = require('./app');

angular.module('resume', [
  require('angular-ui-router'),
  app.name
])
// route configuration file
// browserify will recognize this file as routes/index.js
.config(require('./routes')); 
