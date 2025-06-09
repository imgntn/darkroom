export function initScoreboardOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'scoreboardOverlay';
  overlay.classList.add('overlayPanel');
  overlay.innerHTML = `
    <h2>Leaderboard</h2>
    <ul id="scoreList"></ul>
    <button id="closeScoreboard">Close</button>
  `;
  document.body.appendChild(overlay);

  async function loadScores() {
    try {
      const res = await fetch('/api/scoreboard');
      const data = await res.json();
      const list = overlay.querySelector('#scoreList');
      if (list) {
        list.innerHTML = data.times && data.times.length
          ? data.times.map(t => `<li>${(t/1000).toFixed(1)}s</li>`).join('')
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
  fetch('/api/scoreboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ time })
  }).catch(() => {});
}

export default { initScoreboardOverlay, submitScore };
