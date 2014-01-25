define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var app = require("app");
	var THREE = require('three');
	var geometry = new THREE.CubeGeometry(3000, 3000, 20);
	module.exports = geometry;
});