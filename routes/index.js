'use strict';

module.exports = function($httpProvider, $stateProvider, $urlRouterProvider) {

  // CORS stuff http://better-inter.net/enabling-cors-in-angular-js/
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider.
    state('home', {
      url: '/',
      views: {
        '@': {
          controller: 'homeCtrl',
          templateUrl: 'app/home/index.html'
        }
      }
    }).
    state('skills', {
      url: '/skillset',
      views: {
        '@': {
          controller: 'skillsCtrl as vm',
          templateUrl: 'app/skills/index.html'
        }
      }
    }).
    state('projects', {
      url: '/projects',
      views: {
        '@': {
          controller: 'projectsCtrl',
          templateUrl: 'app/projects/index.html'
        }
      } 
    }).
    state('contact', {
      url: '/contact',
      views: {
        '@': {
          controller: 'contactCtrl',
          templateUrl: 'app/contact/index.html'
        }
      } 
    });

  $urlRouterProvider.otherwise('/');
}
