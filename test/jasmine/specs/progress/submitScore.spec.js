define(function(require) {
  'use strict';
  var progress = require('../../../../app/progress.js');
  var playerName = require('../../../../app/playerName.js');

  describe('score submission', function() {
    beforeEach(function() {
      spyOn(window, 'fetch').and.returnValue(Promise.resolve());
      localStorage.clear();
    });

    afterEach(function() {
      progress.resetProgress();
      window.fetch.calls.reset();
    });

    it('posts name and time when puzzle solved', function() {
      playerName.savePlayerName('Tester');
      progress.startPuzzle();
      jasmine.clock().install();
      jasmine.clock().tick(1000);
      progress.markPuzzleSolved();
      jasmine.clock().uninstall();
      expect(window.fetch).toHaveBeenCalledWith('/api/scoreboard', jasmine.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time: 1000, name: 'Tester' })
      }));
    });
  });
});
