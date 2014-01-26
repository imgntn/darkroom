define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/cameras/cameras.burningbox");

  // Test that the module exists.
  describe("cameras/cameras.burningbox", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});