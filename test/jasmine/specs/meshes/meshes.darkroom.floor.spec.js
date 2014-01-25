define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.darkroom.floor");

  // Test that the module exists.
  describe("meshes/meshes.darkroom.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});