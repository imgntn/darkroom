define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var THREE = require('three');
	var app = require("app");

	
	var player=require('../meshes/meshes.player')
	player.position.y=175;
	player.visible=false;


	var floor = require('../meshes/meshes.darkroom.floor');
	floor.rotation.x=Math.PI/2;
	floor.position.y=-20;

	var cubeMesh = require('../meshes/meshes.cube_basic');
	cubeMesh.position.y=200


	var chamber=require('../meshes/meshes.darkroom.chamber');
	chamber.position.y=250;

	var makeDoor = require('../meshes/meshes.darkroom.door');
	var door1=makeDoor();
	var door2=makeDoor();
	var door3=makeDoor();
	var door4=makeDoor();

	var scene = new THREE.Scene();
	scene.add(player);
	scene.add(cubeMesh);
	scene.add(floor);
	scene.add(chamber);

	scene.add(door1);
	scene.add(door2);
	scene.add(door3);
	scene.add(door4);


	door1.position.z=500;
	door1.position.y=175;

	door2.position.x=500;
	door2.position.y=175;
	door2.rotation.y=Math.PI/2


	door3.position.z=-500;
	door3.position.y=175;

	door4.position.x=-500;
	door4.position.y=175;
	door4.rotation.y=Math.PI/2



	scene.player=player;
	scene.objectsToAnimate = [];
	scene.objectsToAnimate.push(cubeMesh);


	module.exports = scene;
});