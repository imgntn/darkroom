define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.player");

  // Test that the module exists.
  describe("materials/materials.player", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});