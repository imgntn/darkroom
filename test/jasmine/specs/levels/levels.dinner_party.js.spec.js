define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/levels/levels.dinner_party.js");

  // Test that the module exists.
  describe("levels/levels.dinner_party.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});