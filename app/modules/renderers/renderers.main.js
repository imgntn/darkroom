define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
 var THREE= require('three');
  var app = require("app");

var renderer=new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );


  module.exports=renderer;
});