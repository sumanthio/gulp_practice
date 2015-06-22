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
        controllerAs: 'main'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'WorkController',
        controllerAs: 'work'
      })
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'blog'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
