define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/cameras/cameras.dinner_party");

  // Test that the module exists.
  describe("cameras/cameras.dinner_party", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});