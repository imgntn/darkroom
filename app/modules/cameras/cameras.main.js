define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var THREE=require("three");
	console.log('got THREE in camera',THREE)
	var app = require("app");

	var camera = {};
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 1000;
	module.exports = camera;
});