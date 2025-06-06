define(function(require) {
  'use strict';

  var THREE = require('three');
  var keyboard = require('modules/controllers/controllers.first_person.js');

  describe('controllers/controllers.first_person.js', function() {
    beforeEach(function() {
      keyboard.collideableObjects = [];
    });

    it('exists', function() {
      expect(keyboard).toBeTruthy();
    });

    it('registers collisions using cached bounding boxes', function() {
      var player = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
      var obstacle = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
      keyboard.addToCollideableObjects(obstacle);
      player.position.copy(obstacle.position);
      expect(keyboard.collision(player)).toBe(true);
    });
  });
});