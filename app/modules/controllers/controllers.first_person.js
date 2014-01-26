define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var app = require("app");
	var THREEx = require('threex');
	console.log('3x:', THREEx);
	var keyboard = new THREEx.KeyboardState();
	keyboard.collideableObjects = [];
	keyboard.addToCollideableObjects = function(o) {
		this.collideableObjects.push(o);
	};

	keyboard.collision = function(_mesh) {
		var originPoint = _mesh.position.clone();
for (var vertexIndex = 0; vertexIndex < _mesh.geometry.vertices.length; vertexIndex++)
	{		
		var localVertex = _mesh.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( _mesh.matrix );
		var directionVector = globalVertex.sub( _mesh.position );
		
		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObjects( this.collideableObjects );
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) 
			{	
					return true
			}

	}	
	},
	keyboard.update = function(_mesh, _camera) {

		_mesh.add(_camera);


		var rotateAngle = Math.PI / 2;
		var rotateAngle = 0.05;
		// local transformations
		this.collision(_mesh)
	
		if(this.collision(_mesh)!==true){
					// move forwards/backwards/left/right
		if (keyboard.pressed("W"))
			_mesh.translateZ(-5);
		if (keyboard.pressed("S"))
			_mesh.translateZ(5);


		// rotate left/right/up/down
		var rotation_matrix = new THREE.Matrix4().identity();
		if (keyboard.pressed("A"))
			_mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
		if (keyboard.pressed("D"))
			_mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
		}
		else{
				_mesh.translateZ(5);
		}



	}


	module.exports = keyboard;
});