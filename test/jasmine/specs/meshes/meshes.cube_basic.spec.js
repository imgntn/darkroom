define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.cube_basic");

  // Test that the module exists.
  describe("meshes/meshes.cube_basic", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});