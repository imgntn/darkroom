define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/levels/levels.burningbox.js");

  // Test that the module exists.
  describe("levels/levels.burningbox.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});