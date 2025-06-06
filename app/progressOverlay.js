import { getProgress, resetProgress, getBestPuzzleTime, resetPuzzleTimes, getPuzzleTimesSorted } from './progress';
import keyboard from 'modules/controllers/controllers.first_person';
import { motionEnabled, enableMotionControls, disableMotionControls } from './motionControls.js';

export function formatShareText() {
  const best = getBestPuzzleTime();
  const prog = getProgress();
  const level = prog.currentLevel != null ? prog.currentLevel : 'unknown';
  const bestText = best != null ? `${(best/1000).toFixed(1)}s` : 'N/A';
  return `I'm on level ${level} with a best puzzle time of ${bestText} in The Dark Room!`;
}

export async function shareProgress() {
  const text = formatShareText();
  if (navigator.share) {
    try { await navigator.share({ text }); return; } catch (e) { /* ignore */ }
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      alert('Progress copied to clipboard');
    } else {
      throw new Error('Clipboard API unavailable');
    }
  } catch (e) {
    alert(text);
  }
}

export function initProgressOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'progressOverlay';
  overlay.classList.add('overlayPanel');
  overlay.innerHTML = `
    <h2>Progress</h2>
    <div>Visited Levels:</div>
    <ul id="visitedList"></ul>
    <div>Items:</div>
    <ul id="itemsList"></ul>
    <div id="puzzleStatus"></div>
    <div id="bestTime"></div>
    <div>All Times:</div>
    <ul id="timesList"></ul>
    <div>Resume Level:</div>
    <select id="levelSelect"></select>
    <button id="goLevel">Go</button>
    <button id="resetPuzzleTimes">Reset Puzzle Times</button>
    <button id="resetProgress">Reset Progress</button>
    <button id="shareProgress">Share Progress</button>
    <button id="toggleMotion">Enable Motion Controls</button>
  `;
  document.body.appendChild(overlay);

  function update() {
    const prog = getProgress();
    const motionBtn = overlay.querySelector('#toggleMotion');
    if (motionBtn) {
      motionBtn.textContent = motionEnabled()
        ? 'Disable Motion Controls'
        : 'Enable Motion Controls';
    }
    const visited = overlay.querySelector('#visitedList');
    visited.innerHTML = Object.keys(prog.levels).map(l => `<li>${l}</li>`).join('') || '<li>None</li>';
    const items = overlay.querySelector('#itemsList');
    items.innerHTML = Object.keys(prog.items).map(i => `<li>${i}</li>`).join('') || '<li>None</li>';
    overlay.querySelector('#puzzleStatus').textContent = prog.puzzleSolved ? 'Puzzle solved!' : 'Puzzle not solved';
    const best = getBestPuzzleTime();
    overlay.querySelector('#bestTime').textContent = best != null ? `Fastest Time: ${(best/1000).toFixed(1)}s` : 'No puzzle times yet';
    const timesList = overlay.querySelector('#timesList');
    const times = getPuzzleTimesSorted();
    timesList.innerHTML = times.length ? times.map(t => `<li>${(t/1000).toFixed(1)}s</li>`).join('') : '<li>None</li>';
    const select = overlay.querySelector('#levelSelect');
    select.innerHTML = Object.keys(prog.levels).map(l => `<option value="${l}" ${prog.currentLevel==l?'selected':''}>${l}</option>`).join('');
  }


  overlay.querySelector('#resetProgress').addEventListener('click', () => {
    resetProgress();
    update();
  });

  overlay.querySelector('#resetPuzzleTimes').addEventListener('click', () => {
    resetPuzzleTimes();
    update();
  });

  overlay.querySelector('#goLevel').addEventListener('click', () => {
    const select = overlay.querySelector('#levelSelect');
    if (select && select.value) {
      keyboard.enterLevel(select.value);
    }
  });

  overlay.querySelector('#shareProgress').addEventListener('click', shareProgress);

  overlay.querySelector('#toggleMotion').addEventListener('click', () => {
    if (motionEnabled()) {
      disableMotionControls();
      overlay.querySelector('#toggleMotion').textContent = 'Enable Motion Controls';
    } else {
      enableMotionControls();
      overlay.querySelector('#toggleMotion').textContent = 'Disable Motion Controls';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyP') {
      overlay.classList.toggle('show');
      if (overlay.classList.contains('show')) update();
    }
  });
}

export default { initProgressOverlay };
