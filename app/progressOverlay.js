import { getProgress, resetProgress, getBestPuzzleTime, resetPuzzleTimes } from './progress';

export function initProgressOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'progressOverlay';
  overlay.innerHTML = `
    <h2>Progress</h2>
    <div>Visited Levels:</div>
    <ul id="visitedList"></ul>
    <div>Items:</div>
    <ul id="itemsList"></ul>
    <div id="puzzleStatus"></div>
    <div id="bestTime"></div>
    <button id="resetPuzzleTimes">Reset Puzzle Times</button>
    <button id="resetProgress">Reset Progress</button>
  `;
  document.body.appendChild(overlay);

  function update() {
    const prog = getProgress();
    const visited = overlay.querySelector('#visitedList');
    visited.innerHTML = Object.keys(prog.levels).map(l => `<li>${l}</li>`).join('') || '<li>None</li>';
    const items = overlay.querySelector('#itemsList');
    items.innerHTML = Object.keys(prog.items).map(i => `<li>${i}</li>`).join('') || '<li>None</li>';
    overlay.querySelector('#puzzleStatus').textContent = prog.puzzleSolved ? 'Puzzle solved!' : 'Puzzle not solved';
    const best = getBestPuzzleTime();
    overlay.querySelector('#bestTime').textContent = best != null ? `Fastest Time: ${(best/1000).toFixed(1)}s` : 'No puzzle times yet';
  }

  overlay.querySelector('#resetProgress').addEventListener('click', () => {
    resetProgress();
    update();
  });

  overlay.querySelector('#resetPuzzleTimes').addEventListener('click', () => {
    resetPuzzleTimes();
    update();
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyP') {
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
      if (overlay.style.display === 'block') update();
    }
  });
}

export default { initProgressOverlay };
