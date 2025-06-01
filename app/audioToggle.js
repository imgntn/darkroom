define(function(){
  'use strict';
  return {
    initAudioToggle: function(){
      var btn = document.getElementById('audioToggle');
      if(!btn) return;
      var bg = document.getElementById('bgMusic');
      var vocals = document.getElementById('vocals');
      var state = localStorage.getItem('audioMuted');
      if(state === 'true'){
        if(bg) bg.pause();
        if(vocals) vocals.pause();
        btn.textContent = 'Unmute';
      }
      btn.addEventListener('click', function(){
        if(bg.paused){
          bg.play();
          vocals.play();
          localStorage.setItem('audioMuted','false');
          btn.textContent = 'Mute';
        }else{
          bg.pause();
          vocals.pause();
          localStorage.setItem('audioMuted','true');
          btn.textContent = 'Unmute';
        }
      });
    }
  };
});
