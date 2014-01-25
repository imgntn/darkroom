define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.darkroom.floor");

  // Test that the module exists.
  describe("materials/materials.darkroom.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});