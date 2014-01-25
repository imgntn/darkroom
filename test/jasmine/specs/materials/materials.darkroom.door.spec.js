define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.darkroom.door");

  // Test that the module exists.
  describe("materials/materials.darkroom.door", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});