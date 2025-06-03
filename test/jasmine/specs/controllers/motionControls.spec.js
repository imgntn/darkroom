define(function(require) {
  'use strict';
  var mc = require('../../../../app/motionControls.js');

  describe('motionControls mapOrientation', function() {
    it('converts beta and gamma to move flags', function() {
      var m = mc.mapOrientation(-20, 20);
      expect(m.forward).toBe(1);
      expect(m.backward).toBe(0);
      expect(m.right).toBe(1);
      expect(m.left).toBe(0);
    });
  });
});
