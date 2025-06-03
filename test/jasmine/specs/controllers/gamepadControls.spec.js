define(function(require) {
  'use strict';
  var gc = require('../../../../app/gamepadControls.js');

  describe('gamepadControls mapGamepad', function() {
    it('maps axes to movement and look', function() {
      var gp = { axes: [1, -1, 0.5, -0.5] };
      var res = gc.mapGamepad(gp);
      expect(res.move.forward).toBe(1);
      expect(res.move.backward).toBe(0);
      expect(res.move.right).toBe(1);
      expect(res.move.left).toBe(0);
      expect(res.look.dx).toBe(0.5);
      expect(res.look.dy).toBe(-0.5);
    });
  });
});
