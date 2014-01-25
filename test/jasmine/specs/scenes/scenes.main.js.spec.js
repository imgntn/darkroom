define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/scenes/scenes.main.js");

  // Test that the module exists.
  describe("scenes/scenes.main.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});