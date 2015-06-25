(function() {
  'use strict';

  angular
    .module('portfolioSumanth')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($timeout, webDevTec, portURL, toastr, $firebaseArray, $mdToast) {
    var vm = this;

    vm.awesomeThings = [];
    vm.pageClass="contact-page";
    vm.classAnimation = '';
    vm.creationDate = 1434893262833;
    vm.showToastr = showToastr;
    vm.user={};

    activate();
    var ref = new Firebase(portURL + '/messages/');
    var messages = $firebaseArray(ref);
    vm.sendMessage = function (data) {
      messages.$add(data).then(function (snapshot) {
        if(snapshot.key()){
          vm.user = {
            name:'',
            email:'',
            message:''
          };
        $mdToast.show($mdToast.simple()
            .content('I will get you')
            .position('top right')
            .hideDelay(2000)
        );
        }
      });
    };

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
