define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.darkroom.chamber");

  // Test that the module exists.
  describe("geometries/geometries.darkroom.chamber", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});