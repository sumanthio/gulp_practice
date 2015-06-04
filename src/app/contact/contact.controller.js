'use strict';

app.controller('ContactCtrl', function ($scope, PORT_URL, $firebaseArray) {
    $scope.pageClass = 'contact-page';

    var ref = new Firebase(PORT_URL + '/messages');
    var messages = $firebaseArray(ref);

    $scope.user = null;

    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }, {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        '': 'angular.png'
      }
    ];
    $scope.SocialCards = [
      {
        'title': 'Facebook',
        'url': 'https://www.facebook.com/sumanthz',
        'logo': 'facebook'
      },
      {
        'title': 'Twitter',
        'url': 'https://twitter.com/SUM4NTH',
        'logo': 'Twitter'
      },
      {
        'title': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/sumanthz',
        'logo': 'Linkedin'
      },
      {
        'title': 'Github',
        'url': 'https://github.com/sumanthio',
        'logo': 'Github'
      }
    ];
    angular.forEach($scope.awesomeThings, function (awesomeThing) {
      awesomeThing.rank = Math.random();
    });

    $scope.sendTheMessage = function () {
      messages.$add($scope.user)
        .then(function (snapshot) {
          console.log(snapshot.key());
          $scope.user = {
            name:'',
            email:'',
            message:''
          };
        });
    };


  });
