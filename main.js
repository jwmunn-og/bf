var scene = document.querySelector('#scene');
var parallaxInstance = new Parallax(scene);

const triggers = document.querySelectorAll('.menu-button');
triggers.forEach(trigger => trigger.addEventListener('click', handleClick));

function handleClick(e) {
   e.preventDefault();
   console.log('clicked!');
   console.log(this.nextElementSibling);
   this.nextElementSibling.classList.toggle('open');
}