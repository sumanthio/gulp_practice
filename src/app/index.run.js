(function() {
  'use strict';

  angular
    .module('portfolioSumanth')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
