define(function(require) {
  'use strict';
  var createMagicSquare = require('../../../../app/modules/puzzles/magic_square');
  var progress = require('../../../../app/progress');

  describe('magic_square puzzle', function() {
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

    it('solves the puzzle and removes the element', function() {
      var solved = false;
      createMagicSquare(function() { solved = true; });
      var grid = document.getElementById('magicGrid');
      var keys = document.querySelectorAll('#magicKeypad .magic-key');
      var target = [ [8,1,6], [3,5,7], [4,9,2] ];
      for (var i=0;i<3;i++) {
        for (var j=0;j<3;j++) {
          var cell = grid.children[i*3 + j];
          cell.click();
          keys[target[i][j]-1].click();
        }
      }
      expect(document.getElementById('magicSquare').classList.contains('solved')).toBe(true);
      jasmine.clock().tick(1100);
      expect(document.getElementById('magicSquare')).toBeNull();
      expect(solved).toBe(true);
    });

    it('clears cells on restart', function() {
      createMagicSquare(function() {});
      var grid = document.getElementById('magicGrid');
      var firstCell = grid.children[0];
      var keys = document.querySelectorAll('#magicKeypad .magic-key');
      firstCell.click();
      keys[7].click();
      expect(firstCell.textContent).toBe('8');
      document.getElementById('restartPuzzle').click();
      expect(firstCell.textContent).toBe('');
    });
  });
});
