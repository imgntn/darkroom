export function initFullscreenToggle() {
  const btn = document.getElementById('fullscreenToggle');
  if (!btn) return;
  function toggle() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      btn.textContent = 'Exit Fullscreen';
    } else {
      document.exitFullscreen();
      btn.textContent = 'Fullscreen';
    }
  }
  btn.addEventListener('click', toggle);
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyF') toggle();
  });
}

export default { initFullscreenToggle };
