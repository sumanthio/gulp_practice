/* global malarkey:false, toastr:false, moment:false */
(function () {
  'use strict';

  angular
    .module('portfolioSumanth')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('portURL', 'https://sumanth.firebaseio.com');

})();
