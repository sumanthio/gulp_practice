'use strict';

angular.module('portfolioSumanth', ['ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
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
  })
;
