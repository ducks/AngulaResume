'use strict';

module.exports = function() {
  var vm = this; 
 
  function init() {
    vm.skills = [
      {
        name: 'Development',
        list: [
          'unix/linux',
          'bsd',
          'osx',
          'vim',
          'git',
          'cli/bash/zsh',
        ]
      }, 
      {
        name: 'Web',
        list: [
          'html5',
          'css3',
          'angular',
          'mocha',
          'typescript',
          'browserify',
          'sass'
        ]
      },
      {
        name: 'Languages/frameworks',
        list: [
          'node.js',
          'express/koa',
          'perl',
          'dancer',
          'python',
          'django',
          'ruby',
          'jekyll',
          'sinatra',
          'php',
          'drupal'
        ]
      }
    ];

  }

  init();

  return vm;
}
