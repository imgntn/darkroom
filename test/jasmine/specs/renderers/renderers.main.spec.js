define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/renderers/renderers.main.js");

  // Test that the module exists.
  describe("renderers/renderers.main.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});