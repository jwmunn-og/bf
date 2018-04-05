(function(){
  var wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', function(e) {
    console.log(this, e.target);
  });

  // Parallax
  var scene = document.querySelector('#scene');
  var parallaxInstance = new Parallax(scene);

  const triggers = document.querySelectorAll('.menu-button');
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.parentElement.addEventListener('mouseleave', handleLeave));
  triggers.forEach(trigger => trigger.addEventListener('click', handleClick));

  function handleEnter() {
    this.nextElementSibling.classList.add('open');
  }

  function handleLeave() {
    const c = this.childNodes[3];
    console.log(c);
    c.classList.remove('open');
  }

  function handleClick(e) {
    e.preventDefault();
    console.log('clicked!');
    console.log(this.parentElement);
    this.nextElementSibling.classList.toggle('open');
  }

  // Music
  const track1 = new Howl({
    src: ['audio/088_wait-for-it-groove.mp3', 'audio/088_wait-for-it-groove.ogg'],
    onend: function() {
      togglePlay(musicTrigger);
    }
  });
  const track2 = new Howl({
    src: ['audio/079_noisy-vinyl-loop.mp3', 'audio/079_noisy-vinyl-loop.ogg'],
    onend: function() {
      togglePlay(musicTrigger);
    }
  });

  const playlist = [track1, track2];

  const musicTrigger = document.querySelector('.controler');
  const circles = document.querySelector('.player-circles');
  musicTrigger.addEventListener('click', playPause);

  let currentTrack = track1, trackIdx = 0;

  function togglePlay(e) {
    e.classList.toggle('paused');
    e.classList.toggle('playing');
    circles.classList.toggle('show');
  }

  function playPause() {
    togglePlay(this);
    if (currentTrack.playing()) {
      currentTrack.stop();
    } else {
      currentTrack = playlist[trackIdx]
      currentTrack.play();
      trackIdx = (++trackIdx) % playlist.length;
      console.log('Play', trackIdx);
    }

    console.log(track2.playing());
  }

})();