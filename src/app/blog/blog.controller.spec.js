(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('portfolioSumanth'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('BlogController');

      expect(angular.isArray(vm.posts)).toBeTruthy();
      expect(vm.posts.length > 4).toBeTruthy();

    }));
  });
})();
