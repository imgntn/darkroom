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
        var camera = currentScene.get('camera');
        var keyboard = currentScene.get('keyboard');
        requestAnimationFrame(animate);
        renderer.render(level, camera);
        keyboard.update(level.player,camera)

      }

      var init = function() {

        //camera, scene

        var camera = require('modules/cameras/cameras.main');
        currentScene.set('camera', camera);
        var darkroom = require('modules/levels/levels.darkroom');
        currentScene.set('level', darkroom);
        var renderer = require('modules/renderers/renderers.main');
        currentScene.set('renderer', renderer);
        document.body.appendChild(renderer.domElement);

        var keyboard=require('modules/controllers/controllers.first_person');
        currentScene.set('keyboard',keyboard);
 window.story = require('modules/story/story.main');

      }

      init();
      animate();


    }
  });
});