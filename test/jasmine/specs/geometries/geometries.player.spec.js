define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/geometries/geometries.player");

  // Test that the module exists.
  describe("geometries/geometries.player", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});