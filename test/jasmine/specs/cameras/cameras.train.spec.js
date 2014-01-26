define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/cameras/cameras.train");

  // Test that the module exists.
  describe("cameras/cameras.train", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});