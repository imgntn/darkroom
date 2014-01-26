define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var THREE = require('three')
  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      console.log("Welcome to your / route.");



      var CurrentScene = Backbone.Model.extend({
        initialize: function() {
          this.set('camera', null);
          this.set('level', null)
        }
      });
      var currentScene = new CurrentScene();
      var animate = function() {
        var renderer = currentScene.get('renderer');
        var level = currentScene.get('level');

        _.each(level.objectsToAnimate, function(object) {
          object.rotation.y += 0.01;
        })
        var camera = currentScene.get('cameraMain');
        var keyboard = currentScene.get('keyboard');
        var burningbox = currentScene.get('burningbox');
        var cameraBurningBox=currentScene.get('cameraBurningBox')
        requestAnimationFrame(animate);
        renderer.render( level, cameraBurningBox, burningbox.firstRenderTarget, true );
renderer.render( level, burningbox.screenCamera, burningbox.finalRenderTarget, true );
        renderer.render(level, camera);
        keyboard.update(level.player,camera);

      }

      var init = function() {

        //camera, scene

        var cameraMain = require('modules/cameras/cameras.main');
        currentScene.set('cameraMain', cameraMain);
        var darkroom = require('modules/levels/levels.darkroom');
        currentScene.set('level', darkroom);
        var cameraBurningBox = require('modules/cameras/cameras.burningbox');
        currentScene.set('cameraBurningBox',cameraBurningBox)
        var burningbox = require('modules/levels/levels.burningbox');
        currentScene.set('burningbox',burningbox)
        darkroom.add(cameraBurningBox);
        darkroom.add(burningbox.plane1);
        burningbox.plane1.position.y=250;
      
        burningbox.plane1.position.z=502;
  
     
        var renderer = require('modules/renderers/renderers.main');
        renderer.autoClear = false;
        currentScene.set('renderer', renderer);

        document.body.appendChild(renderer.domElement);

        var keyboard=require('modules/controllers/controllers.first_person');

        currentScene.set('keyboard',keyboard);

      }

      init();
      animate();


    }
  });
});