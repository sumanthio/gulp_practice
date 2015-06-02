'use strict';

angular.module('portfolioSumanth', ['ngRoute', 'ngMaterial', 'ngMessages','firebase'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'WorkCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  })
  .constant('PORT_URL', 'https://sumanth.firebaseio.com/')
;
