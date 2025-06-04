import { startPuzzle } from '../../progress';

export default function createMagicSquare(onSolved) {
  startPuzzle();
  const target = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ];
  const state = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const container = document.createElement('div');
  container.id = 'magicSquare';
  const timerEl = document.createElement('div');
  timerEl.id = 'puzzleTimer';
  container.appendChild(timerEl);
  const grid = document.createElement('div');
  grid.id = 'magicGrid';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(3, 50px)';
  grid.style.gridGap = '5px';
  container.appendChild(grid);

  const keypad = document.createElement('div');
  keypad.id = 'magicKeypad';
  keypad.style.marginTop = '10px';
  keypad.style.display = 'grid';
  keypad.style.gridTemplateColumns = 'repeat(3, 40px)';
  keypad.style.gridGap = '5px';
  container.appendChild(keypad);

  let selected = null;

  function updateTimer(start) {
    const now = Date.now();
    timerEl.textContent = ((now - start) / 1000).toFixed(1) + 's';
    if (!container.classList.contains('solved')) {
      requestAnimationFrame(() => updateTimer(start));
    }
  }
  updateTimer(Date.now());

  function check() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (state[i][j] !== target[i][j]) {
          return;
        }
      }
    }
    container.classList.add('solved');
    if (typeof onSolved === 'function') onSolved();
    setTimeout(() => container.remove(), 1000);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.className = 'magic-cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.textContent = '';
      cell.addEventListener('click', () => {
        selected = cell;
      });
      grid.appendChild(cell);
    }
  }

  for (let n = 1; n <= 9; n++) {
    const btn = document.createElement('div');
    btn.className = 'magic-key';
    btn.textContent = String(n);
    btn.addEventListener('click', () => {
      if (!selected) return;
      selected.textContent = String(n);
      const r = parseInt(selected.dataset.row, 10);
      const c = parseInt(selected.dataset.col, 10);
      state[r][c] = n;
      check();
    });
    keypad.appendChild(btn);
  }

  document.body.appendChild(container);
}
