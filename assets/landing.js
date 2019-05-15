(function(){
  // Parallax
  const scene = document.querySelector('#scene');
  const parallaxInstance = new Parallax(scene);

  const interactiveScene = document.querySelector('#interactive-scene');
  const parallaxClickable = new Parallax(interactiveScene, { pointerEvents: true });

  // Navigation
  const triggers = document.querySelectorAll('.menu-button');
  const submenu = document.querySelectorAll('.submenu');

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.parentElement.addEventListener('mouseleave', handleLeave));
  triggers.forEach(trigger => trigger.addEventListener('click', handleClick));

  let ul = null;
  let direction = 'Up';

  function handleEnter() {
    if (this.previousElementSibling !== null) {
      ul = this.previousElementSibling.children[0];
      direction = 'Up'
    } else if (this.nextElementSibling !== null) {
      ul = this.nextElementSibling.children[0];
      direction = 'Down';
    }
    ul.classList.add('animated', 'fadeIn' + direction);
  }

  function handleLeave() {
    ul.classList.remove('animated', 'fadeInUp', 'fadeInDown');
  }

  function handleClick(e) {
    e.preventDefault();
    const ul = this.nextElementSibling.children[0];
    ul.classList.toggle('hide');
    ul.classList.toggle('show');
  }

  // Music Player
  const track = new Howl({
    src: ['https://cdn.shopify.com/s/files/1/0015/2286/0098/files/Lips_instrumental__mastered.ogg?1688236753449196781', 'https://cdn.shopify.com/s/files/1/0015/2286/0098/files/Lips_instrumental__mastered.mp3?2388419940002623494'],
    autoplay: true,
    onload: () => {
      musicTrigger.style.opacity = 1;
      togglePlay(musicTrigger);
    },
    onend: () => { togglePlay(musicTrigger) }
  });

  const circles = document.querySelector('.player-circles');
  const musicTrigger = document.querySelector('.controller');
  musicTrigger.style.opacity = .5;
  musicTrigger.addEventListener('click', playPause);

  function togglePlay(e) {
    e.classList.toggle('paused');
    e.classList.toggle('playing');
    circles.classList.toggle('show');
  }

  function playPause() {
    console.log(track.state());
    if (track.state() !== 'loaded') {

    } else {
      togglePlay(this);
      return track.playing() ? track.pause() : track.play();
    }

  }
})();