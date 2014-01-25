define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/levels/levels.train.js");

  // Test that the module exists.
  describe("levels/levels.train.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});