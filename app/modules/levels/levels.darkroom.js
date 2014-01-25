define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
 var THREE= require('three');
  var app = require("app");

  var cubeMesh = require('../meshes/meshes.cube_basic');

   	var scene = new THREE.Scene();
   	scene.add(cubeMesh)

   	scene.objectsToAnimate=[]
   	scene.objectsToAnimate.push(cubeMesh)

	module.exports = scene;
});