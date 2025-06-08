import { startPuzzle } from '../../progress';

export default function createMemoryMatch(onSolved) {
  startPuzzle();
  let startTime = Date.now();
  const letters = 'ABCDEFGH'.split('');
  let cards = shuffle(letters.concat(letters));
  let revealed = [];
  let matched = new Set();
  let firstPick = null;

  const container = document.createElement('div');
  container.id = 'memoryMatch';

  const timerEl = document.createElement('div');
  timerEl.id = 'puzzleTimer';
  container.appendChild(timerEl);

  const grid = document.createElement('div');
  grid.id = 'memoryGrid';
  container.appendChild(grid);

  const restartBtn = document.createElement('button');
  restartBtn.id = 'restartPuzzle';
  restartBtn.textContent = 'Restart';
  restartBtn.addEventListener('click', restart);
  container.appendChild(restartBtn);

  document.body.appendChild(container);

  renderGrid();
  updateTimer(startTime);

  function updateTimer(start) {
    const now = Date.now();
    timerEl.textContent = ((now - start) / 1000).toFixed(1) + 's';
    if (!container.classList.contains('solved')) {
      requestAnimationFrame(() => updateTimer(start));
    }
  }

  function renderGrid() {
    grid.innerHTML = '';
    cards.forEach((letter, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.index = idx;
      card.textContent = revealed.includes(idx) ? letter : '?';
      card.addEventListener('click', () => onCardClick(idx));
      grid.appendChild(card);
    });
  }

  function onCardClick(index) {
    if (revealed.includes(index) || container.classList.contains('solved')) return;
    revealed.push(index);
    if (firstPick === null) {
      firstPick = index;
    } else {
      if (cards[firstPick] === cards[index]) {
        matched.add(cards[index]);
        firstPick = null;
        if (matched.size === letters.length) solved();
      } else {
        const a = firstPick;
        const b = index;
        setTimeout(() => {
          revealed = revealed.filter(i => i !== a && i !== b);
          firstPick = null;
          renderGrid();
        }, 600);
      }
    }
    renderGrid();
  }

  function solved() {
    container.classList.add('solved');
    if (typeof onSolved === 'function') onSolved();
    setTimeout(() => {
      container.remove();
    }, 1000);
  }

  function restart() {
    container.classList.remove('solved');
    startPuzzle();
    startTime = Date.now();
    cards = shuffle(letters.concat(letters));
    revealed = [];
    matched.clear();
    firstPick = null;
    renderGrid();
    updateTimer(startTime);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
