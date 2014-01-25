define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/materials/materials.cube_basic.js");

  // Test that the module exists.
  describe("materials/materials.cube_basic.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});