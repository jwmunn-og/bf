(function(){
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
  const musicTrigger = document.querySelector('.controler');
  const circles = document.querySelector('.player-circles');
  musicTrigger.addEventListener('click', playPause);

  function playPause() {
    this.classList.toggle('paused');
    this.classList.toggle('playing');
    circles.classList.toggle('show');
  }

})();