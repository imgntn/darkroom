define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/effects/effects.kleptomania.js");

  // Test that the module exists.
  describe("effects/effects.kleptomania.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});