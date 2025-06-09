export const DEFAULT_BINDINGS = {
  forward: 'W',
  backward: 'S',
  left: 'A',
  right: 'D',
  interact: 'space'
};

export const DEFAULT_ACCENT_COLOR = '#0ff';

export function loadAccentColor() {
  return localStorage.getItem('accentColor') || DEFAULT_ACCENT_COLOR;
}

export function saveAccentColor(color) {
  localStorage.setItem('accentColor', color);
  document.documentElement.style.setProperty('--accent-color', color);
}

export function applyAccentColor() {
  document.documentElement.style.setProperty('--accent-color', loadAccentColor());
}

export function loadKeyBindings() {
  try {
    const stored = JSON.parse(localStorage.getItem('keyBindings') || 'null');
    return { ...DEFAULT_BINDINGS, ...stored };
  } catch (e) {
    return { ...DEFAULT_BINDINGS };
  }
}

export function saveKeyBindings(bindings) {
  localStorage.setItem('keyBindings', JSON.stringify(bindings));
}

function createInput(id, label, value) {
  const wrap = document.createElement('div');
  const lbl = document.createElement('label');
  lbl.textContent = label + ': ';
  const input = document.createElement('input');
  input.id = id;
  input.value = value;
  lbl.appendChild(input);
  wrap.appendChild(lbl);
  return { wrap, input };
}

export function initSettingsOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'settingsOverlay';
  overlay.classList.add('overlayPanel');

  const bindings = loadKeyBindings();
  const accentColor = loadAccentColor();

  const elements = {
    forward: createInput('bindForward', 'Forward', bindings.forward),
    backward: createInput('bindBackward', 'Backward', bindings.backward),
    left: createInput('bindLeft', 'Left', bindings.left),
    right: createInput('bindRight', 'Right', bindings.right),
    interact: createInput('bindInteract', 'Interact', bindings.interact)
  };

  const colorInput = createInput('accentColor', 'Crosshair Color', accentColor);
  colorInput.input.type = 'color';

  overlay.appendChild(document.createElement('h2')).textContent = 'Key Bindings';
  Object.values(elements).forEach(obj => overlay.appendChild(obj.wrap));
  overlay.appendChild(document.createElement('h2')).textContent = 'Appearance';
  overlay.appendChild(colorInput.wrap);

  const saveBtn = document.createElement('button');
  saveBtn.id = 'saveBindings';
  saveBtn.textContent = 'Save';
  overlay.appendChild(saveBtn);

  const closeBtn = document.createElement('button');
  closeBtn.id = 'closeSettings';
  closeBtn.textContent = 'Close';
  overlay.appendChild(closeBtn);

  document.body.appendChild(overlay);

  function populate() {
    const map = loadKeyBindings();
    Object.keys(elements).forEach(k => {
      elements[k].input.value = map[k];
    });
    colorInput.input.value = loadAccentColor();
  }

  saveBtn.addEventListener('click', () => {
    const newMap = {
      forward: elements.forward.input.value || DEFAULT_BINDINGS.forward,
      backward: elements.backward.input.value || DEFAULT_BINDINGS.backward,
      left: elements.left.input.value || DEFAULT_BINDINGS.left,
      right: elements.right.input.value || DEFAULT_BINDINGS.right,
      interact: elements.interact.input.value || DEFAULT_BINDINGS.interact
    };
    saveKeyBindings(newMap);
    saveAccentColor(colorInput.input.value || DEFAULT_ACCENT_COLOR);
    document.dispatchEvent(new CustomEvent('keyBindingsSaved', { detail: newMap }));
    overlay.classList.remove('show');
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      overlay.classList.toggle('show');
      if (overlay.classList.contains('show')) populate();
    }
  });
}

export default { initSettingsOverlay, loadKeyBindings, saveKeyBindings, loadAccentColor, saveAccentColor, applyAccentColor };
