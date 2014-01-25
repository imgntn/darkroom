define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/levels/levels.darkroom");

  // Test that the module exists.
  describe("levels/levels.darkroom", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});