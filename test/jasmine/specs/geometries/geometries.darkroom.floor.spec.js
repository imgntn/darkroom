define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.darkroom.floor");

  // Test that the module exists.
  describe("geometries/geometries.darkroom.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});