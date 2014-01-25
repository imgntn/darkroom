define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");

var THREE= require('three');
  var app = require("app");

  var makeDoorMaterial=function(){
  	 var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: false } );
  	 return material
  }
 module.exports = makeDoorMaterial;
});