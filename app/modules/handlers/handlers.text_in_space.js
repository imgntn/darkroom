define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");

 var TextHandler={

 makeText:function(obj,frontcolor,sidecolor){
 	var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
	var materialArray = [ materialFront, materialSide ];
	var textGeom = new THREE.TextGeometry(obj.text, 
	{
		size: 50, height: 10, curveSegments: 3,
		font: "helvetiker",
		bevelThickness: 1, bevelSize: 2, bevelEnabled: true,
		material: 0, extrudeMaterial: 1,
	}

	);
	var textMaterial = new THREE.MeshFaceMaterial(materialArray);
	var textMesh = new THREE.Mesh(textGeom, textMaterial );
	
	textGeom.computeBoundingBox();
	var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
	





 return textMesh
 },
  easyText:function(text,frontcolor,sidecolor){
 	var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
	var materialArray = [ materialFront, materialSide ];
	var textGeom = new THREE.TextGeometry(text, 
	{
		size: 50, height: 10, curveSegments: 3,
		font: "helvetiker",
		bevelThickness: 1, bevelSize: 2, bevelEnabled: true,
		material: 0, extrudeMaterial: 1,
	}

	);
	var textMaterial = new THREE.MeshFaceMaterial(materialArray);
	var textMesh = new THREE.Mesh(textGeom, textMaterial );
	
	textGeom.computeBoundingBox();
	var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
	



 return textMesh
 }

  }


// Do some optional calculations. This is only if you need to get the
// width of the generated text
//textGeom.computeBoundingBox();
//textGeom.textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;


module.exports=TextHandler
});