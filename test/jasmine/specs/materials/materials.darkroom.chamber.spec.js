define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.darkroom.chamber");

  // Test that the module exists.
  describe("materials/materials.darkroom.chamber", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});