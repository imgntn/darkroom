define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/effects/effects.pyromania.js");

  // Test that the module exists.
  describe("effects/effects.pyromania.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});