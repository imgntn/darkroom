define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");



var makeDoorGeometry = function(){
	var THREE= require('three');
var geometry = new THREE.CubeGeometry( 200, 350, 20 );
return geometry
}

module.exports = makeDoorGeometry;
});