'use strict';

angular.module('portfolioSumanth')
  .controller('ContactCtrl', function ($scope) {
    $scope.pageClass='contact-page';
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },{
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }
    ];
    $scope.SocialCards = [
      {
        'title': 'Facebook',
        'url': 'https://www.facebook.com/sumanthz',
        'logo': 'angular.png'
      },
      {
        'title': 'Twitter',
        'url': 'https://twitter.com/SUM4NTH',
        'logo': 'angular.png'
      },
      {
        'title': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/sumanthz',
        'logo': 'angular.png'
      },
      {
        'title': 'Github',
        'url': 'https://github.com/sumanthio',
        'logo': 'angular.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
