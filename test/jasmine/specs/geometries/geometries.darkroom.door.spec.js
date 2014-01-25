define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.darkroom.door");

  // Test that the module exists.
  describe("geometries/geometries.darkroom.door", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});