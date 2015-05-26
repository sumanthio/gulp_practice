'use strict';

angular.module('portfolioSumanth', ['ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/swipe', {
        templateUrl: 'app/main/main.html',
        controller: 'SwipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
