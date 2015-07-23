define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");

	var THREE = require('three');
	var app = require("app");

	var geometry = require('../geometries/geometries.darkroom.floor');
	var material = require('../materials/materials.darkroom.floor');

	var mesh = new THREE.Mesh(geometry, material);
	module.exports = mesh;
});