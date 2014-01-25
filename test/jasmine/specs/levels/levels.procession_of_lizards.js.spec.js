define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/levels/levels.procession_of_lizards.js");

  // Test that the module exists.
  describe("levels/levels.procession_of_lizards.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});