import * as THREE from 'three';

let current = null;
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.BackSide });

export function highlight(object) {
  if (!object || object === current?.parent) return;
  removeHighlight();
  if (!object.geometry) return;
  const outline = new THREE.Mesh(object.geometry.clone(), material);
  outline.scale.multiplyScalar(1.05);
  object.add(outline);
  current = outline;
}

export function removeHighlight() {
  if (current && current.parent) {
    current.parent.remove(current);
    current.geometry.dispose();
  }
  current = null;
}
