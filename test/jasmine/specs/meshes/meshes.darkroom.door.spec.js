define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.darkroom.door");

  // Test that the module exists.
  describe("meshes/meshes.darkroom.door", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});
