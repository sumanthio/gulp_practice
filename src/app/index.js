'use strict';

var app = angular.module('portfolioSumanth', ['ngRoute', 'ngMaterial', 'ngMessages', 'firebase']);

app.config(function ($routeProvider, $locationProvider) {
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
});


app.constant('PORT_URL', 'https://sumanth.firebaseio.com/');
