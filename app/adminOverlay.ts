import { getProgress, resetProgress } from './progress';
import keyboard from 'modules/controllers/controllers.first_person';

export function initAdminOverlay(): void {
  const overlay = document.createElement('div');
  overlay.id = 'adminOverlay';
  overlay.classList.add('overlayPanel');
  overlay.innerHTML = `
    <h2>Admin Panel</h2>
    <pre id="adminProgress"></pre>
    <div>
      <input id="adminLevel" placeholder="Level id" />
      <button id="adminGoLevel">Go</button>
    </div>
    <button id="adminReset">Reset Progress</button>
    <button id="adminClose">Close</button>
  `;
  document.body.appendChild(overlay);

  const progressPre = overlay.querySelector<HTMLPreElement>('#adminProgress')!;
  const levelInput = overlay.querySelector<HTMLInputElement>('#adminLevel')!;
  const goBtn = overlay.querySelector<HTMLButtonElement>('#adminGoLevel')!;
  const resetBtn = overlay.querySelector<HTMLButtonElement>('#adminReset')!;
  const closeBtn = overlay.querySelector<HTMLButtonElement>('#adminClose')!;

  function update() {
    progressPre.textContent = JSON.stringify(getProgress(), null, 2);
  }

  goBtn.addEventListener('click', () => {
    const val = levelInput.value.trim();
    if (val) keyboard.enterLevel(val);
  });

  resetBtn.addEventListener('click', () => {
    resetProgress();
    update();
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyO') {
      overlay.classList.toggle('show');
      if (overlay.classList.contains('show')) update();
    }
  });
}

export default { initAdminOverlay };
