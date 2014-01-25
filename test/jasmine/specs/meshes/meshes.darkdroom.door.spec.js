define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.darkdroom.door");

  // Test that the module exists.
  describe("meshes/meshes.darkdroom.door", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});