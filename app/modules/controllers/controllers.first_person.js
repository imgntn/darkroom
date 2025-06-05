import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import app from 'app';
import THREEx from 'threex';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import story from 'modules/story/story.main';
import createMagicSquare from 'modules/puzzles/magic_square';
import { markPuzzleSolved, markItemCollected, markLevelVisited, setCurrentLevel } from '../../progress';
import { highlight, removeHighlight } from '../../highlightManager.js';
import { initTouchControls, getMove, getLook } from '../../touchControls.js';
import { initGamepadControls, getGamepadMove, getGamepadLook } from '../../gamepadControls.js';
import { getMotionMove, getMotionLook } from '../../motionControls.js';
import { loadKeyBindings } from '../../settingsOverlay.js';

const keyboard = new THREEx.KeyboardState();
let controls;
let keyBindings = loadKeyBindings();

function eventMatches(e, alias) {
  const name = alias.toLowerCase();
  if (name === 'space') return e.code === 'Space';
  if (name === 'up') return e.code === 'ArrowUp';
  if (name === 'down') return e.code === 'ArrowDown';
  if (name === 'left') return e.code === 'ArrowLeft';
  if (name === 'right') return e.code === 'ArrowRight';
  return e.key && e.key.toUpperCase() === alias.toUpperCase();
}

keyboard.initPointerLock = function(camera) {
  controls = new PointerLockControls(camera, document.body);
  document.addEventListener('click', () => controls.lock());
  controls.addEventListener('lock', () => {
    const hint = document.getElementById('pointerHint');
    if (hint) hint.style.display = 'none';
  });
  controls.addEventListener('unlock', () => {
    const hint = document.getElementById('pointerHint');
    if (hint) hint.style.display = 'block';
  });
}; 

document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyO') {
    createMagicSquare(() => {
      markPuzzleSolved();
    });
  }
});

document.addEventListener('keyBindingsSaved', (e) => {
  keyBindings = e.detail;
});

 


$('body').keyup(function(e) {
 if(eventMatches(e, keyBindings.interact)){
        var canInteract=keyboard.detectObjects(true)
 }
 else if(e.which===77){
        var bg = document.getElementById('bgMusic');
        var vocals = document.getElementById('vocals');
        if(bg && vocals){
                if(bg.paused){
                        bg.play();
                        vocals.play();
                }
                else{
                        bg.pause();
                        vocals.pause();
                }
        }
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
       keyboard.enterLevel=async function(id){
               markLevelVisited(id);
               setCurrentLevel(id);
               await app.router.loadLevelById(id);
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
                const playerBox = new THREE.Box3().setFromObject(_mesh);
                for (const obj of this.collideableObjects) {
                        const objBox = new THREE.Box3().setFromObject(obj);
                        if (playerBox.intersectsBox(objBox)) {
                                if (obj.id === 27) keyboard.enterLevel(27);
                                else if (obj.id === 30) keyboard.enterLevel(30);
                                else if (obj.id === 29) keyboard.enterLevel(29);
                                return true;
                        }
                }
                return false;
        };


keyboard.detectObjects = function(interact = false) {
                const _mesh = this.detectMesh;
                const origin = _mesh.position.clone();
                const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(_mesh.quaternion).normalize();
                const ray = new THREE.Raycaster(origin, direction);
                const collisionResults = ray.intersectObjects(this.detectableObjects);
                const crosshair = document.getElementById('crosshair');
                let hit = false;
                let hitObj = null;
                if (collisionResults.length > 0) {
                        hit = true;
                        hitObj = collisionResults[0].object;
                        if (interact) {
                                _.each(collisionResults, function(result) {
                                        if (result.object.id === 75) {
                                                keyboard.enterLevel('darkroom');
                                                $('#itemText').text('You rescued the jewelry box.').fadeIn('slow').delay(3500).fadeOut('slow');
                                                markItemCollected('jewelryBox');
                                        }
                                        if (result.object.id === 123) {
                                                keyboard.enterLevel('darkroom');
                                                $('#itemText').text('You found the letter.').fadeIn('slow').delay(3500).fadeOut('slow');
                                                markItemCollected('letter');
                                        }
                                });
                        }
                }
                if (crosshair) {
                        if (hit) crosshair.classList.add('interactable');
                        else crosshair.classList.remove('interactable');
                }
                if (hit) highlight(hitObj); else removeHighlight();
                return hit;
        },
        keyboard.update = function(_mesh, _camera) {
                _mesh.add(_camera);
                if (controls) {
                        const moveTouch = getMove();
                        const movePad = getGamepadMove();
                        const moveMotion = getMotionMove();
                        const forward = moveTouch.forward || movePad.forward || moveMotion.forward;
                        const backward = moveTouch.backward || movePad.backward || moveMotion.backward;
                        const left = moveTouch.left || movePad.left || moveMotion.left;
                        const right = moveTouch.right || movePad.right || moveMotion.right;
                        if (keyboard.pressed(keyBindings.forward) || keyboard.pressed("up") || forward) controls.moveForward(5);
                        if (keyboard.pressed(keyBindings.backward) || keyboard.pressed("down") || backward) controls.moveForward(-5);
                        if (keyboard.pressed(keyBindings.left) || keyboard.pressed("left") || left) controls.moveRight(-5);
                        if (keyboard.pressed(keyBindings.right) || keyboard.pressed("right") || right) controls.moveRight(5);
                        const lookTouch = getLook();
                        const lookPad = getGamepadLook();
                        const lookMotion = getMotionLook();
                        const dx = lookTouch.dx + lookPad.dx + lookMotion.dx;
                        const dy = lookTouch.dy + lookPad.dy + lookMotion.dy;
                        if (dx || dy) {
                                const obj = controls.getObject();
                                obj.rotation.y -= dx * 0.002;
                                _camera.rotation.x -= dy * 0.002;
                        }
                }
                this.collision(_mesh);
                this.detectMesh.position = _mesh.position;
                this.detectObjects(false);
        }


export default keyboard;
