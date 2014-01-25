define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.darkroom.chamber");

  // Test that the module exists.
  describe("meshes/meshes.darkroom.chamber", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});