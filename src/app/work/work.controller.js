(function() {
  'use strict';

  angular
    .module('portfolioSumanth')
    .controller('WorkController', WorkController);

  /** @ngInject */
  function WorkController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.pageClass="work-page";
    vm.classAnimation = '';
    vm.creationDate = 1434893262833;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
