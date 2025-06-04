export function initHelpOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'helpOverlay';
  overlay.innerHTML = `
    <h2>Controls</h2>
    <div id="keyboardHelp">
      <h3>Keyboard</h3>
      <p>WASD to move, Space to interact, M to mute, P for progress</p>
    </div>
    <div id="gamepadHelp" style="display:none;">
      <h3>Gamepad</h3>
      <p>Left stick to move, Right stick to look, Button South to interact</p>
    </div>
    <div id="touchHelp" style="display:none;">
      <h3>Touch</h3>
      <p>Use on-screen joysticks to move and look</p>
    </div>
    <div id="motionHelp" style="display:none;">
      <h3>Motion</h3>
      <p>Tilt device to move and look</p>
    </div>
    <button id="closeHelp">Close</button>
  `;
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector('#closeHelp');
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    localStorage.setItem('helpHidden', 'true');
  });

  function showHelp() {
    overlay.style.display = 'block';
    localStorage.setItem('helpHidden', 'false');
  }

  function detectControl(e) {
    if (e.type === 'gamepadconnected') {
      overlay.querySelector('#gamepadHelp').style.display = 'block';
    } else if (e.type === 'touchstart') {
      overlay.querySelector('#touchHelp').style.display = 'block';
      window.removeEventListener('touchstart', detectControl);
    } else if (e.type === 'deviceorientation') {
      overlay.querySelector('#motionHelp').style.display = 'block';
      window.removeEventListener('deviceorientation', detectControl);
    } else if (e.type === 'keydown') {
      overlay.querySelector('#keyboardHelp').style.display = 'block';
    }
  }

  window.addEventListener('gamepadconnected', detectControl, { once: true });
  window.addEventListener('touchstart', detectControl, { once: true });
  window.addEventListener('deviceorientation', detectControl, { once: true });
  window.addEventListener('keydown', detectControl, { once: true });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyH') {
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
      localStorage.setItem('helpHidden', overlay.style.display === 'none' ? 'true' : 'false');
    }
  });

  if (localStorage.getItem('helpHidden') !== 'true') {
    showHelp();
  }
}

export default { initHelpOverlay };
