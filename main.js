(function(){
  // Parallax
  var scene = document.querySelector('#scene');
  var parallaxInstance = new Parallax(scene);

  const triggers = document.querySelectorAll('.menu-button');
  const submenu = document.querySelectorAll('.submenu');
  // console.log(submenu);
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.parentElement.addEventListener('mouseleave', handleLeave));
  triggers.forEach(trigger => trigger.addEventListener('click', handleClick));

  let ul = null;

  function handleEnter() {
    if (this.previousElementSibling !== null) {
      ul = this.previousElementSibling.children[0];
    } else if (this.nextElementSibling !== null) {
      ul = this.nextElementSibling.children[0];
    }
    console.log(ul);
    ul.classList.add('show');
  }

  function handleLeave() {
    ul.classList.remove('show');
  }

  function handleClick(e) {
    e.preventDefault();
    const ul = this.nextElementSibling.children[0];
    console.log(ul);
    ul.classList.toggle('hide');
    ul.classList.toggle('show');
    // console.log(ul, ul.childElementCount);
    // console.log('clicked!');
    // for (let i = 0; i < ul.childElementCount; i++) {
    //   setInterval(function() {
    //     ul.children[i].classList.toggle('show');
    //     ul.children[i].classList.toggle('hide');
    //   }, 300);
    // }

    // this.nextElementSibling.classList.toggle('open');
  }

  function toggleView(context) {
    const ul = context.nextElementSibling.children[0];
    console.log(ul);
    ul.classList.toggle('hide');
    ul.classList.toggle('show');
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