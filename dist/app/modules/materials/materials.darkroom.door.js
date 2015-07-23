define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");

var THREE= require('three');
  var app = require("app");

  var makeDoorMaterial=function(){
  	   //  var material = new THREE.MeshLambertMaterial({
      //   map: THREE.ImageUtils.loadTexture('http://fc09.deviantart.net/fs71/i/2009/341/e/4/Wood_Grain_Medium_Ash_Texture_by_SweetSoulSister.jpg')
      // });


  	 var material = new THREE.MeshBasicMaterial( { color: 0x111111, wireframe: false } );
  	 return material
  }
 module.exports = makeDoorMaterial;
});