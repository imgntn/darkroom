define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.burningbox.floor");

  // Test that the module exists.
  describe("materials/materials.burningbox.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});