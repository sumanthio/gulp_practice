(function() {
  'use strict';

  angular
    .module('portfolioSumanth')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        animate:'main-page'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'WorkController',
        controllerAs: 'work',
        animate:'work-page'
      })
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'blog',
        animate:'blog-page'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact',
        animate:'contact-page'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
