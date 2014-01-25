define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.player");

  // Test that the module exists.
  describe("meshes/meshes.player", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});