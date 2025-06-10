import { loadPlayerName, savePlayerName } from './playerName.js';
export function initScoreboardOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'scoreboardOverlay';
  overlay.classList.add('overlayPanel');
  overlay.innerHTML = `
    <h2>Leaderboard</h2>
    <label>Name: <input id="playerNameInput" /></label>
    <ul id="scoreList"></ul>
    <button id="closeScoreboard">Close</button>
  `;
  document.body.appendChild(overlay);

  const nameInput = overlay.querySelector('#playerNameInput');
  if (nameInput) {
    nameInput.value = loadPlayerName();
    nameInput.addEventListener('change', () => {
      savePlayerName(nameInput.value);
    });
  }

  async function loadScores() {
    try {
      const res = await fetch('/api/scoreboard');
      const data = await res.json();
      const list = overlay.querySelector('#scoreList');
      if (list) {
        const scores = data.scores || (data.times || []).map(t => ({ time: t, name: 'Unknown' }));
        list.innerHTML = scores.length
          ? scores.map(s => `<li>${s.name} – ${(s.time/1000).toFixed(1)}s</li>`).join('')
          : '<li>None</li>';
      }
    } catch (e) {
      console.error(e);
    }
  }

  overlay.querySelector('#closeScoreboard').addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyL') {
      overlay.classList.toggle('show');
      if (overlay.classList.contains('show')) loadScores();
    }
  });
}

export function submitScore(time) {
  const name = loadPlayerName();
  fetch('/api/scoreboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ time, name })
  }).catch(() => {});
}

export default { initScoreboardOverlay, submitScore };
