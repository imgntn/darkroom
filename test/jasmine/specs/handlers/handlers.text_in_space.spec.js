define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/handlers/handlers.text_in_space.js");

  // Test that the module exists.
  describe("handlers/handlers.text_in_space.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});