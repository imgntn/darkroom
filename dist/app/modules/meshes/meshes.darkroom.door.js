define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");

	var THREE = require('three');
	var app = require("app");



	 function makeDoor() {
		var doorGeometry = require('../geometries/geometries.darkroom.door');
		var doorMaterial = require('../materials/materials.darkroom.door');
		var geometry = new doorGeometry();
		var material = new doorMaterial();
		var mesh = new THREE.Mesh(geometry, material);
		return mesh
	}


	module.exports = makeDoor;
});