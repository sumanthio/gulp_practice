(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('portfolioSumanth'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(vm.pageClass).toBeTruthy();
    }));
  });
})();
