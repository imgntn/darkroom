define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/meshes/meshes.burningbox.floor");

  // Test that the module exists.
  describe("meshes/meshes.burningbox.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});