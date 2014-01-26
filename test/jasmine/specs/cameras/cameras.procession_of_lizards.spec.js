define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/cameras/camera.procession_of_lizards");

  // Test that the module exists.
  describe("cameras/camera.procession_of_lizards", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});