let enabled = false;
let move = {forward:0, backward:0, left:0, right:0};
let look = {dx:0, dy:0};
let last = {beta:0, gamma:0};
const thresh = 15;

export function mapOrientation(beta, gamma){
  const m = {forward:0, backward:0, left:0, right:0};
  if(beta < -thresh) m.forward = 1;
  if(beta > thresh) m.backward = 1;
  if(gamma < -thresh) m.left = 1;
  if(gamma > thresh) m.right = 1;
  return m;
}

function handle(e){
  move = mapOrientation(e.beta || 0, e.gamma || 0);
  look.dx = (e.gamma - last.gamma) * 0.05;
  look.dy = (e.beta - last.beta) * 0.05;
  last.gamma = e.gamma; last.beta = e.beta;
}

export function enableMotionControls(){
  if(enabled) return;
  window.addEventListener('deviceorientation', handle);
  enabled = true;
}

export function disableMotionControls(){
  if(!enabled) return;
  window.removeEventListener('deviceorientation', handle);
  enabled = false;
  move = {forward:0, backward:0, left:0, right:0};
  look = {dx:0, dy:0};
}

export function getMotionMove(){
  return move;
}

export function getMotionLook(){
  const l = {...look};
  look.dx=0; look.dy=0;
  return l;
}

export function motionEnabled(){
  return enabled;
}
