define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.burningbox.floor");

  // Test that the module exists.
  describe("geometries/geometries.burningbox.floor", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});