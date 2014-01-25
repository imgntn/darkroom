define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/effects/effects.narcolepsy.js");

  // Test that the module exists.
  describe("effects/effects.narcolepsy.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});