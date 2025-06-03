define(function(require) {
  'use strict';
  var progress = require('../../../../app/progress.js');

  describe('progress module', function() {
    afterEach(function() {
      progress.resetProgress();
    });

    it('stores visited levels', function() {
      progress.resetProgress();
      progress.markLevelVisited('foo');
      expect(progress.getProgress().levels.foo).toBe(true);
    });

  it('clears progress on reset', function() {
    progress.markItemCollected('item');
    progress.resetProgress();
    expect(progress.getProgress().items.item).toBeUndefined();
  });

  it('records puzzle completion time', function() {
    progress.resetProgress();
    progress.startPuzzle();
    jasmine.clock().install();
    jasmine.clock().tick(2000);
    progress.markPuzzleSolved();
    jasmine.clock().uninstall();
    expect(progress.getProgress().puzzleTimes.length).toBe(1);
    expect(progress.getProgress().puzzleTimes[0]).toBe(2000);
    expect(progress.getBestPuzzleTime()).toBe(2000);
  });
  });
});
