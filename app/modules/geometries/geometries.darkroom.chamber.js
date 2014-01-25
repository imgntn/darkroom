define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");
var THREE= require('three');
var geometry = new THREE.CubeGeometry( 1000, 500, 1000 );
module.exports = geometry;
});