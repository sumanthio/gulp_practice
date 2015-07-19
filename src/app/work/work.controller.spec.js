(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('portfolioSumanth'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('WorkController');

      expect(vm.pageClass).toBeTruthy();
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
