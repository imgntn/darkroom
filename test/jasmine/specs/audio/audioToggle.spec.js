import { initAudioToggle } from '../../../app/audioToggle.js';

describe('audioToggle', () => {
  let btn, bg, vocals;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="audioToggle"></button>
      <audio id="bgMusic"></audio>
      <audio id="vocals"></audio>
    `;
    btn = document.getElementById('audioToggle');
    bg = document.getElementById('bgMusic');
    vocals = document.getElementById('vocals');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('initializes muted state from localStorage', () => {
    localStorage.setItem('audioMuted', 'true');
    spyOn(bg, 'pause');
    spyOn(vocals, 'pause');
    initAudioToggle();
    expect(btn.textContent).toBe('Unmute');
    expect(bg.pause).toHaveBeenCalled();
    expect(vocals.pause).toHaveBeenCalled();
  });

  it('toggles audio on click', () => {
    localStorage.setItem('audioMuted', 'true');
    spyOn(bg, 'play');
    spyOn(vocals, 'play');
    initAudioToggle();

    btn.click();
    expect(bg.play).toHaveBeenCalled();
    expect(vocals.play).toHaveBeenCalled();
    expect(btn.textContent).toBe('Mute');
    expect(localStorage.getItem('audioMuted')).toBe('false');
  });
});
