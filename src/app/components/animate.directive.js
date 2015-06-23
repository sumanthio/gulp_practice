(function () {
  'use strict';

  angular
    .module('portfolioSumanth')
    .directive('animeClass', acmeClass);

  /** @ngInject */
  function acmeClass($route) {
    return {
      link: function (scope, elm, attrs) {
        var enterClass = $route.current.animate;
        elm.addClass(enterClass);
        scope.$on('$destroy',function(){
          elm.removeClass(enterClass);
          elm.addClass($route.current.animate);
        });
      }
    }

  }

})();
