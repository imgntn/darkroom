define(function(require, exports, module) {
  "use strict";
  var THREE = require('three');
  var InstancedHelper = {};
  InstancedHelper.createMesh = function(geometry, material, transforms) {
    var mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
    var dummy = new THREE.Object3D();
    transforms.forEach(function(t, i) {
      if(t.position) dummy.position.set(t.position[0], t.position[1], t.position[2]);
      if(t.rotation) dummy.rotation.set(t.rotation[0], t.rotation[1], t.rotation[2]);
      if(t.scale) dummy.scale.set(t.scale[0], t.scale[1], t.scale[2]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
  };
  module.exports = InstancedHelper;
});
