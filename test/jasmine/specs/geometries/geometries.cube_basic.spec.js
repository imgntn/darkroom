define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.cube_basic.js");

  // Test that the module exists.
  describe("geometries/geometries.cube_basic.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});