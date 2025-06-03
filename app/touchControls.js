let move = {forward:0, backward:0, left:0, right:0};
let look = {dx:0, dy:0};
let leftId = null, rightId = null;
let leftStart = null, rightStart = null;

export function initTouchControls(){
  const left = document.createElement('div');
  left.id = 'joystickLeft';
  const right = document.createElement('div');
  right.id = 'joystickRight';
  document.body.appendChild(left);
  document.body.appendChild(right);

  function handleStart(e){
    for(const t of e.changedTouches){
      if(t.target === left && leftId===null){
        leftId = t.identifier;
        leftStart = {x:t.clientX,y:t.clientY};
      }else if(t.target === right && rightId===null){
        rightId = t.identifier;
        rightStart = {x:t.clientX,y:t.clientY};
      }
    }
  }

  function handleMove(e){
    for(const t of e.changedTouches){
      if(t.identifier===leftId){
        const dx = t.clientX - leftStart.x;
        const dy = t.clientY - leftStart.y;
        move.forward = dy < -10 ? 1 : 0;
        move.backward = dy > 10 ? 1 : 0;
        move.left = dx < -10 ? 1 : 0;
        move.right = dx > 10 ? 1 : 0;
      } else if(t.identifier===rightId){
        look.dx = t.clientX - rightStart.x;
        look.dy = t.clientY - rightStart.y;
        rightStart = {x:t.clientX,y:t.clientY};
      }
    }
  }

  function handleEnd(e){
    for(const t of e.changedTouches){
      if(t.identifier===leftId){
        leftId=null; move={forward:0,backward:0,left:0,right:0};
      } else if(t.identifier===rightId){
        rightId=null; look={dx:0,dy:0};
      }
    }
  }

  [left,right].forEach(el=>{
    el.addEventListener('touchstart',handleStart);
    el.addEventListener('touchmove',handleMove);
    el.addEventListener('touchend',handleEnd);
    el.addEventListener('touchcancel',handleEnd);
  });
}

export function getMove(){
  return move;
}

export function getLook(){
  const d = {...look};
  look.dx=0; look.dy=0;
  return d;
}
