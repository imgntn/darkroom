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
        const val = prompt('Enter number 1-9');
        if (!val) return;
        const n = parseInt(val, 10);
        cell.textContent = n;
        state[i][j] = n;
        check();
      });
      container.appendChild(cell);
    }
  }

  document.body.appendChild(container);
}

