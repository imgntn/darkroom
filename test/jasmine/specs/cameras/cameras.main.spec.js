define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/cameras/camera.main");

  // Test that the module exists.
  describe("cameras/camera.main", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});