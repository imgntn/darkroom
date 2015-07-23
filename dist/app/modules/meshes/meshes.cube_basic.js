define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");

var THREE= require('three');
  var app = require("app");

  var geometry = require('../geometries/geometries.cube_basic');
  var material = require('../materials/materials.cube_basic');

var mesh = new THREE.Mesh( geometry, material );
module.exports = mesh;
});