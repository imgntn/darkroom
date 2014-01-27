define(function(require, exports, module) {
	"use strict";

	var $ = require("jquery");
	var _ = require("underscore");
	var Backbone = require("backbone");
	var app = require("app");
	var THREEx = require('threex');
	var keyboard = new THREEx.KeyboardState();

	var  story = require('modules/story/story.main');

 


	$('body').keyup(function(e) {

 if(e.which===32){
	var canInteract=keyboard.detectObjects()
 }

});
	keyboard.locations={
		burningbox:null,
		dinner:null,
		train:null,
		lizards:null,
		darkroom:null
	};
	keyboard.rotations={
		burningbox:null,
		dinner:null,
		train:null,
		lizards:null,
		darkroom:null
	};
	keyboard.locations.burningbox={
		x:2684,
		y:240,
		z:248
	},
		keyboard.locations.dinner={
		x:2684,
		y:240,
		z:248
	},
keyboard.locations.lizards={
	x: 692.3494977382522, y: 240, z: -2851.52657393995
}
		keyboard.locations.train={
x: -4708, y: 240, z: 6004
	},
		keyboard.locations.darkroom={
		x:0,
		y:240,
		z:965
	}

	keyboard.rotations.burningbox={x: 0, y: -1.5500000000004073, z: 0}
keyboard.rotations.train={	x: 0, y: -0.10000000000000063, z: 0}


	keyboard.collideableObjects = [];
	keyboard.detectableObjects=[];
	keyboard.relocatePlayer=function(location,rotation){
		console.log('new loc is:',location)

	keyboard.player.position.x=location.x;
	keyboard.player.position.y=location.y;
	keyboard.player.position.z=location.z;
	if(rotation){
	keyboard.player.rotation.x=rotation.x;
	keyboard.player.rotation.y=rotation.y;
	keyboard.player.rotation.z=rotation.z;	
	}
	}
	keyboard.enterLevel=function(id){
		if(id==="darkroom"){
$('#goalText').text('');
keyboard.relocatePlayer(keyboard.locations.darkroom)
$('.story').remove()
  story.makeStoryElement(0);
  $('.storyholder').hide();
  $('#storyholder_0').show()
		}
		if (id === 27) {
//start burningbox
keyboard.relocatePlayer(keyboard.locations.burningbox,keyboard.rotations.burningbox)

$('.story').remove()
  story.makeStoryElement(1);
  $('#goalText').text('Rescue the box');
  $('.storyholder').hide();
  $('#storyholder_1').show()
		}
		else if (id === 28) {
//start dinnerparty
$('.story').remove()
  story.makeStoryElement(3);
  $('.storyholder').hide();
  $('#storyholder_3').show()
		}
	else if (id === 29) {
//start train
 $('#goalText').text('Find the letter');
console.log('starting train')
$('.story').remove()
keyboard.relocatePlayer(keyboard.locations.train,keyboard.rotations.train)

  story.makeStoryElement(2);
  $('.storyholder').hide();
  $('#storyholder_2').show()

		}
		else if (id === 30) {
//start lizards
console.log('starting lizards')
// keyboard.relocatePlayer(keyboard.locations.lizards)
//   story.makeStoryElement(4);
//   $('.storyholder').hide();
//   $('#storyholder_4').show()
		}
	}
	keyboard.addToCollideableObjects = function(o) {
		this.collideableObjects.push(o);
	};

		keyboard.addToDetectableObjects = function(o) {
		this.detectableObjects.push(o);
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
						if(collisionResults[0].object.id===27){
								keyboard.enterLevel(27)
								
						}
						else if(collisionResults[0].object.id===30){
							keyboard.enterLevel(30)
								
							
						}
						else if(collisionResults[0].object.id===29){
							keyboard.enterLevel(29)
							
							
						}

				// _.each(collisionResults,function(result){
				// 		console.log('collision obj id:',result.object.id)
				// 		if(result.object.id===27){
				// 				keyboard.enterLevel(27)
								
				// 		}
				// 		else if(result.object.id===30){
				// 			keyboard.enterLevel(30)
								
							
				// 		}
				// 		else if(result.object.id===29){
				// 			keyboard.enterLevel(29)
							
							
				// 		}
					
				// 	})
			
					return true
			}

	}	
	},

keyboard.detectObjects = function() {
console.log('player pos:',keyboard.player.position,keyboard.player.rotation)
		var _mesh=this.detectMesh
		var originPoint = _mesh.position.clone();
for (var vertexIndex = 0; vertexIndex < _mesh.geometry.vertices.length; vertexIndex++)
	{		
		var localVertex = _mesh.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( _mesh.matrix );
		var directionVector = globalVertex.sub( _mesh.position );
		
		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObjects( this.detectableObjects );
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) 
			{	
					_.each(collisionResults,function(result){
						console.log('result obj id:',result.object.id)
						if(result.object.id===75){

							keyboard.enterLevel('darkroom')
						   $('#itemText').text('You rescued the jewelry box.').fadeIn('slow').delay(3500).fadeOut('slow')					
						   	}
						   if(result.object.id===123){

							keyboard.enterLevel('darkroom')
						   $('#itemText').text('You found the letter.').fadeIn('slow').delay(3500).fadeOut('slow')					
						   	}
					
					})
					console.log('detection results:',collisionResults)
					return true
			}

	}	
	},
	keyboard.update = function(_mesh, _camera) {

		_mesh.add(_camera);



		var rotateAngle = 0.05;
		// local transformations
		this.collision(_mesh)
	
		if(this.collision(_mesh)!==true){
					// move forwards/backwards/left/right
		if (keyboard.pressed("W"))
			_mesh.translateZ(-50);
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
	this.detectMesh.position=_mesh.position;



	}


	module.exports = keyboard;
});