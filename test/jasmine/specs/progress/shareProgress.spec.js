define(function(require) {
  'use strict';
  var overlay = require('../../../../app/progressOverlay.js');
  var progress = require('../../../../app/progress.js');

  describe('share text formatting', function() {
    afterEach(function() { progress.resetProgress(); });

    it('builds summary string', function() {
      progress.resetProgress();
      progress.setCurrentLevel('test');
      progress.startPuzzle();
      jasmine.clock().install();
      jasmine.clock().tick(1000);
      progress.markPuzzleSolved();
      jasmine.clock().uninstall();
      var text = overlay.formatShareText();
      expect(text).toContain('level test');
      expect(text).toContain('1.0s');
    });
  });
});
