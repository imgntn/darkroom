const deadZone = 0.2;
let move = {forward:0, backward:0, left:0, right:0};
let look = {dx:0, dy:0};

export function mapGamepad(gp){
  const m = {forward:0, backward:0, left:0, right:0};
  const l = {dx:0, dy:0};
  if(!gp) return {move:m, look:l};
  const lx = gp.axes[0] || 0;
  const ly = gp.axes[1] || 0;
  m.forward = ly < -deadZone ? 1 : 0;
  m.backward = ly > deadZone ? 1 : 0;
  m.left = lx < -deadZone ? 1 : 0;
  m.right = lx > deadZone ? 1 : 0;
  const rx = gp.axes[2] || 0;
  const ry = gp.axes[3] || 0;
  l.dx = Math.abs(rx) > deadZone ? rx : 0;
  l.dy = Math.abs(ry) > deadZone ? ry : 0;
  return {move:m, look:l};
}

export function initGamepadControls(){
  function update(){
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const res = mapGamepad(pads[0]);
    move = res.move;
    look = res.look;
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export function getGamepadMove(){
  return move;
}

export function getGamepadLook(){
  const l = {...look};
  look.dx=0; look.dy=0;
  return l;
}
