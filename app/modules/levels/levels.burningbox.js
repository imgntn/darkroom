define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var THREE = require('three');
	var app = require("app");


	// intermediate scene.
	//   this solves the problem of the mirrored texture by mirroring it again.
	//   consists of a camera looking at a plane with the mirrored texture on it. 

	var ScreenScene = {
		initialize: function() {

			this.screenScene = new THREE.Scene();

			this.screenCamera = new THREE.OrthographicCamera(
				2000,4000,
				1000, 0, 0, 545);
			this.screenCamera.position.z = 1000;
			this.screenScene.add(this.screenCamera);

			this.screenGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

			this.firstRenderTarget = new THREE.WebGLRenderTarget(512, 512, {
				format: THREE.RGBFormat
			});
			this.screenMaterial = new THREE.MeshBasicMaterial({
				map: this.firstRenderTarget
			});

			this.quad = new THREE.Mesh(this.screenGeometry, this.screenMaterial);
			// quad.rotation.x = Math.PI / 2;
			this.screenScene.add(this.quad);

			// final version of camera texture, used in scene. 
			this.planeGeometry = new THREE.CubeGeometry(200, 100, 1, 1);
			this.finalRenderTarget = new THREE.WebGLRenderTarget(512, 512, {
				format: THREE.RGBFormat
			});
			this.planeMaterial = new THREE.MeshBasicMaterial({
				map: this.finalRenderTarget
			});
			this.plane1 = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
			this.plane1.position.set(0, 100, 500);
		},
		setupStaticObjects: function() {
			this.staticObjects = [
				[{
					text: 'Single Bed'
				}, {
					text: 'Single Bed'
				}],
				[{
					text: 'Master Bed'
				}],
				[{
					text: 'Mirror'
				}, {
					text: 'Mirror'
				}, {
					text: 'Mirror'
				}],
				[{
					text: 'Table'
				}, {
					text: 'Table'
				}, {
					text: 'Table'
				}],
				[{
					text: 'Dresser'
				}, {
					text: 'Dresser'
				}],
				[{
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}, {
					text: 'Wall'
				}],
				[{
					text: 'Window'
				}, {
					text: 'Window'
				}, {
					text: 'Window'
				}, {
					text: 'Window'
				}],
				[{
					text: 'Stairs'
				}],
				[{
					text: 'Bannister'
				}],
				[{
					text: 'Painting'
				}, {
					text: 'Painting'
				}, {
					text: 'Painting'
				}, {
					text: 'Painting'
				}, {
					text: 'Painting'
				}, {
					text: 'Painting'
				}],
				[{
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}, {
					text: 'Fire',
					reaction: 'hurtPlayer'
				}],
				[{
					text: 'Box',
					reaction: 'giveToPlayer'
				}],
				[{
					text: 'Clothes'
				}, {
					text: 'Clothes'
				}, {
					text: 'Clothes'
				}, {
					text: 'Clothes'
				}],
				[{
					text: 'Pillow'
				}, {
					text: 'Pillow'
				}, {
					text: 'Pillow'
				}, {
					text: 'Pillow'
				}]
			]

		}

	}


	ScreenScene.initialize();
	ScreenScene.setupStaticObjects();



	module.exports = ScreenScene;
});