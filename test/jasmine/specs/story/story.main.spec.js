define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/story/story.main");

  // Test that the module exists.
  describe("story/story.main", function() {
    it("exists", function() {
      expect(Module).toBeTruthy();
    });
  });
});