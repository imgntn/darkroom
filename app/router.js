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
        var cameraBurningBox=currentScene.get('cameraBurningBox');

        var dinnerParty=currentScene.get('dinnerParty');
        var cameraDinnerParty=currentScene.get('cameraDinnerParty');

        var processionOfLizards=currentScene.get('processionOfLizards');
        var cameraLizards=currentScene.get('cameraLizards');

        var train=currentScene.get('train');
        var cameraTrain=currentScene.get('cameraTrain');

        requestAnimationFrame(animate);
        renderer.render( level, cameraBurningBox, burningbox.firstRenderTarget, true );
        renderer.render( level, burningbox.screenCamera, burningbox.finalRenderTarget, true );
        renderer.render( level, cameraDinnerParty, dinnerParty.firstRenderTarget, true );
        renderer.render( level, dinnerParty.screenCamera, dinnerParty.finalRenderTarget, true );
        renderer.render( level, cameraLizards, processionOfLizards.firstRenderTarget, true );
        renderer.render( level, processionOfLizards.screenCamera, processionOfLizards.finalRenderTarget, true );
        renderer.render( level, cameraTrain, train.firstRenderTarget, true );
        renderer.render( level, train.screenCamera, train.finalRenderTarget, true );
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

         var cameraDinnerParty = require('modules/cameras/cameras.dinner_party');
        currentScene.set('cameraDinnerParty',cameraDinnerParty)
        var dinnerParty = require('modules/levels/levels.dinner_party');
        currentScene.set('dinnerParty',dinnerParty)

        var cameraLizards = require('modules/cameras/cameras.procession_of_lizards');
        currentScene.set('cameraLizards',cameraLizards)
        var processionOfLizards = require('modules/levels/levels.procession_of_lizards');
        currentScene.set('processionOfLizards',processionOfLizards)

        var cameraTrain = require('modules/cameras/cameras.train');
        currentScene.set('cameraTrain',cameraTrain)
        var train = require('modules/levels/levels.train');
        currentScene.set('train',train)

        darkroom.add(cameraBurningBox);
        darkroom.add(burningbox.plane1);

        darkroom.add(cameraDinnerParty);
        darkroom.add(dinnerParty.plane1);

        darkroom.add(cameraLizards);
        darkroom.add(processionOfLizards.plane1);

        darkroom.add(cameraTrain);
        darkroom.add(train.plane1);

        burningbox.plane1.position.y=250;
        burningbox.plane1.position.z=502;

       dinnerParty.plane1.position.x=502;
       dinnerParty.plane1.position.y=250;
       dinnerParty.plane1.position.z=0;
       dinnerParty.plane1.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI/2);

       processionOfLizards.plane1.position.x=-502;
       processionOfLizards.plane1.position.y=250;
       processionOfLizards.plane1.position.z=0;
       processionOfLizards.plane1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);

        train.plane1.position.y=250;
        train.plane1.position.z=-502;
        train.plane1.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);



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