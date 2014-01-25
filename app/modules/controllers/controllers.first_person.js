define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");
  var THREEx=require('threex');
  console.log('3x:',THREEx);
  var keyboard = new THREEx.KeyboardState();

keyboard.update=function(_mesh,_camera)
{
	_camera.position.z=0;
	_mesh.add(_camera);


	var rotateAngle = Math.PI / 2;
	var rotateAngle=0.05;
	// local transformations

	// move forwards/backwards/left/right
	if ( keyboard.pressed("W") )
		_mesh.translateZ( -5 );
	if ( keyboard.pressed("S") )
		_mesh.translateZ(  5 );
	if ( keyboard.pressed("Q") )
		_mesh.translateX( -5 );
	if ( keyboard.pressed("E") )
		_mesh.translateX(  5 );	

	// rotate left/right/up/down
	var rotation_matrix = new THREE.Matrix4().identity();
	if ( keyboard.pressed("A") )
		_mesh.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
	if ( keyboard.pressed("D") )
		_mesh.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
	if ( keyboard.pressed("R") )
		_mesh.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
	if ( keyboard.pressed("F") )
		_mesh.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
	
	if ( keyboard.pressed("Z") )
	{
		_mesh.position.set(0,25.1,0);
		_mesh.rotation.set(0,0,0);
	}
	
	// var relativeCameraOffset = new THREE.Vector3(0,50,200);

	//var cameraOffset = relativeCameraOffset.applyMatrix4( _mesh.matrixWorld );

	// _camera.position.x = cameraOffset.x;
	// _camera.position.y = cameraOffset.y;
	// _camera.position.z = cameraOffset.z;

}



module.exports = keyboard;
});