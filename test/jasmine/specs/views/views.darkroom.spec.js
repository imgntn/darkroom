define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/views/views.darkroom.js");

  // Test that the module exists.
  describe("views/views.darkroom.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});