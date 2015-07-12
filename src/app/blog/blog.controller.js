(function () {
  'use strict';

  angular
    .module('portfolioSumanth')
    .controller('BlogController', BlogController);

  /** @ngInject */
  function BlogController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.pageClass = "blog-page";
    vm.classAnimation = '';
    vm.creationDate = 1434893262833;
    vm.showToastr = showToastr;

    vm.posts = [{
      "title": "One of the Bad days in my life",
      "link": "http://strictlybtech.blogspot.in/2014/12/one-of-bad-days-in-my-life.html",
      "desc": "Here is the story of a looser I know. More or less a story about one of his bad days in his life, which are......'"
    },
      {
        "title": "A page in my life",
        "link": "http://strictlybtech.blogspot.in/2011/06/page-in-my-life_29.html",
        "desc": "Disclaimer: Any resemblance to a contemporary engineering student is not so...."
      },
      {
        "title": "Rock Star Muzic Review",
        "link": "https://expressmuzic.wordpress.com/2011/10/01/rock-star-muzic-review/",
        "desc": " I feel that this is one of the best things I have ever written"
      },
      {
        "title": "3 Muzic Review",
        "link": "https://expressmuzic.wordpress.com/2011/12/28/3-muzic-review/",
        "desc": "Something similar that is not at all related to AngularJS nor LAMP"
      }

    ];

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
