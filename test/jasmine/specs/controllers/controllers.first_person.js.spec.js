define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/controllers/controllers.first_person.js");

  // Test that the module exists.
  describe("controllers/controllers.first_person.js", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});