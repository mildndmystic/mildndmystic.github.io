window.onload = function() {
  const audio = document.getElementById('background-audio');
  const playButton = document.getElementById('play-audio');
 
  setTimeout(() => {
    playButton.click();
  }, 100);

  playButton.onclick = function() {
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  };
};
