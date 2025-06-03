import Backbone from 'backbone';
import * as THREE from 'three';
import cameraMain from 'modules/cameras/cameras.main';
import darkroom from 'modules/levels/levels.darkroom';
import { loadLevel, getLoadedLevel, prefetchLevel } from './levelLoader.js';
import rendererMain from 'modules/renderers/renderers.main';
import keyboard from 'modules/controllers/controllers.first_person';
import story from 'modules/story/story.main';
import { getProgress } from './progress';
import { initTouchControls } from './touchControls.js';

export default Backbone.Router.extend({
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
        var cameraBurningBox = currentScene.get('cameraBurningBox');
        if (burningbox && cameraBurningBox) {
          burningbox.screenCamera.updateProjectionMatrix();
          cameraBurningBox.updateProjectionMatrix();
        }

        var dinnerParty = currentScene.get('dinnerParty');
        var cameraDinnerParty = currentScene.get('cameraDinnerParty');

        var processionOfLizards = currentScene.get('processionOfLizards');
        var cameraLizards = currentScene.get('cameraLizards');

        var train = currentScene.get('train');
        var cameraTrain = currentScene.get('cameraTrain');

        requestAnimationFrame(animate);
        if (burningbox && cameraBurningBox) {
          renderer.render(level, burningbox.screenCamera, burningbox.finalRenderTarget, true);
        }
        if (dinnerParty && cameraDinnerParty) {
          renderer.render(level, dinnerParty.screenCamera, dinnerParty.finalRenderTarget, true);
        }
        if (processionOfLizards && cameraLizards) {
          renderer.render(level, processionOfLizards.screenCamera, processionOfLizards.finalRenderTarget, true);
        }
        if (train && cameraTrain) {
          // renderer.render(level, train.screenCamera, train.finalRenderTarget, true);
        }
         renderer.render(level, camera);
        keyboard.update(level.player, camera);


      }

      this.loadLevelById = async function(id) {
        const map = {
          27: 'burningbox',
          28: 'dinner_party',
          29: 'train',
          30: 'procession_of_lizards'
        };
        const name = map[id];
        if (!name) return;
        const loaded = getLoadedLevel(name) || await loadLevel(name);
        currentScene.set(name, loaded.level);
        const camKey = 'camera' + name.replace(/(^|_)(\w)/g, (m, p1, p2) => p2.toUpperCase());
        currentScene.set(camKey, loaded.camera);
        darkroom.add(loaded.camera);
        darkroom.add(loaded.level.plane1);
        if (name === 'burningbox') {
          loaded.camera.position.set(2684,240,248);
          loaded.level.plane1.position.y = 350;
          loaded.level.plane1.position.z = 502;
          darkroom.objectsToAnimate.push(loaded.camera, loaded.level.screenCamera);
        } else if (name === 'dinner_party') {
          loaded.level.plane1.position.x = 502;
          loaded.level.plane1.position.y = 250;
          loaded.level.plane1.position.z = 0;
          loaded.level.plane1.rotateOnAxis(new THREE.Vector3(0,1,0), -Math.PI/2);
        } else if (name === 'procession_of_lizards') {
          loaded.level.plane1.position.x = -502;
          loaded.level.plane1.position.y = 250;
          loaded.level.plane1.position.z = 0;
          loaded.level.plane1.rotateOnAxis(new THREE.Vector3(0,1,0), Math.PI/2);
        } else if (name === 'train') {
          loaded.level.plane1.position.y = 250;
          loaded.level.plane1.position.z = -502;
          loaded.level.plane1.rotateOnAxis(new THREE.Vector3(0,1,0), Math.PI);
        }
      };

      var init = function() {

        //camera, scene

        currentScene.set('cameraMain', cameraMain);
        currentScene.set('level', darkroom);
        keyboard.initPointerLock(cameraMain);
        initTouchControls();
 
  





        var renderer = rendererMain;
        renderer.autoClear = false;
        renderer.setSize(window.innerWidth , window.innerHeight)
        window.addEventListener('resize', () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          cameraMain.aspect = window.innerWidth / window.innerHeight;
          cameraMain.updateProjectionMatrix();
        });
        currentScene.set('renderer', renderer);
        $('#loader').hide();
        document.body.appendChild(renderer.domElement);
       $('#statusHolder').show()


        keyboard.player = darkroom.player;

        var detectGeometry = new THREE.CubeGeometry(800, 800, 800, 100, 100, 100);
        var detectMaterial = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true
        });
        var detectMesh = new THREE.Mesh(detectGeometry, detectMaterial);
          detectMesh.visible = false;
        darkroom.add(detectMesh);
        keyboard.detectMesh = detectMesh;

        currentScene.set('keyboard', keyboard);

        story.makeTheStory();

    
        story.makeStoryElement(0);


        var dividerGeometry = new THREE.CubeGeometry(3000, 4000, 50);
        var dividerMaterial = new THREE.MeshBasicMaterial({
          color: 0x000000,
          wireframe: false
        });
        var divider1 = new THREE.Mesh(dividerGeometry, dividerMaterial);
        divider1.position=new THREE.Vector3(0,1000,1500)
        darkroom.add(divider1)
        var divider2 = new THREE.Mesh(dividerGeometry, dividerMaterial);
        divider2.position=new THREE.Vector3(0,1000,-1500)
        darkroom.add(divider2)
        var divider3 = new THREE.Mesh(dividerGeometry, dividerMaterial);
        divider3.position=new THREE.Vector3(-1500,1000,0)
        divider3.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
        darkroom.add(divider3)
        var divider4 = new THREE.Mesh(dividerGeometry, dividerMaterial);
        divider4.position=new THREE.Vector3(1500,1000,0)
        divider4.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI/2);
        darkroom.add(divider4)

        keyboard.addToCollideableObjects(divider1)
        keyboard.addToCollideableObjects(divider2)
        keyboard.addToCollideableObjects(divider3)
        keyboard.addToCollideableObjects(divider4)

        const prefetchNames = ['burningbox','dinner_party','train','procession_of_lizards'];
        prefetchNames.forEach(name => prefetchLevel(name));

        // story.makeStoryElement(2);
        // story.makeStoryElement(3);
        // story.makeStoryElement(4);

      }

      init();
      animate();
      const prog = getProgress();
      keyboard.enterLevel(prog.currentLevel || 27)

    }
  });
