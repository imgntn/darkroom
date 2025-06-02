export function initAudioToggle() {
  const btn = document.getElementById('audioToggle');
  if (!btn) return;
  const bg = document.getElementById('bgMusic');
  const vocals = document.getElementById('vocals');
  const state = localStorage.getItem('audioMuted');
  if (state === 'true') {
    if (bg) bg.pause();
    if (vocals) vocals.pause();
    btn.textContent = 'Unmute';
  }
  btn.addEventListener('click', () => {
    if (bg.paused) {
      bg.play();
      vocals.play();
      localStorage.setItem('audioMuted', 'false');
      btn.textContent = 'Mute';
    } else {
      bg.pause();
      vocals.pause();
      localStorage.setItem('audioMuted', 'true');
      btn.textContent = 'Unmute';
    }
  });
}

export default { initAudioToggle };
