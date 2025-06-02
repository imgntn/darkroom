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
  });
});
