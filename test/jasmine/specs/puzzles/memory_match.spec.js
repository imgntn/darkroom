define(function(require) {
  'use strict';
  var createMemoryMatch = require('../../../../app/modules/puzzles/memory_match');
  var progress = require('../../../../app/progress');

  describe('memory_match puzzle', function() {
    beforeEach(function() {
      document.body.innerHTML = '';
      progress.resetProgress();
      spyOn(window, 'requestAnimationFrame').and.callFake(function(cb){ cb(); });
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
      document.body.innerHTML = '';
      window.requestAnimationFrame.and.callThrough();
    });

    it('restart resets all cards', function() {
      createMemoryMatch(function() {});
      var first = document.querySelector('#memoryGrid .memory-card');
      first.click();
      expect(first.textContent).not.toBe('?');
      document.getElementById('restartPuzzle').click();
      var cards = document.querySelectorAll('#memoryGrid .memory-card');
      for (var i=0;i<cards.length;i++) {
        expect(cards[i].textContent).toBe('?');
      }
    });
  });
});
