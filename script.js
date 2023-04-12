const rioAudio = document.getElementById("rio");
const animacao1 = document.querySelector(".modal-poema-1");


var diminuirAnimation = anime({
  targets: '#diminuir',
  fontSize: 0,
  duration: 5650,
  easing: 'easeOutQuad',
  autoplay: false,
});
var aumentarAnimation = anime({
  targets: '#aumentar',
  fontSize: [
    { value: '0px', duration: 5, easing: 'easeOutExpo' },
    { value: '90px', duration: 5650, easing: 'easeInQuad' }
  ],
  autoplay: false,
});


animacao1.addEventListener("mouseover", () => {

  diminuirAnimation.play();
  aumentarAnimation.play();

  rioAudio.play();
  
});
animacao1.addEventListener("mouseout", () => {

  diminuirAnimation.restart();
  diminuirAnimation.pause()

  aumentarAnimation.restart();
  aumentarAnimation.pause()

  rioAudio.load();

});



// -------------------------------- iniciar animacao manso rio

const animacao2 = document.querySelector(".modal-poema-2");
const audio2 = document.getElementById("audio-2");
const curve1 = document.querySelector(".curve-1");
const curve2 = document.querySelector(".curve-2");

const textElements = document.querySelectorAll(".fall-animation span");
var inicioAntecipado = 500;


const sumir = anime.timeline();
  sumir.add({
    targets: textElements,
    opacity: 0,
    duration: 0001,
  });
  sumir.pause();


const animation = anime.timeline();
textElements.forEach((text, index) => {
  animation.add({
    delay: 3000,
  });
  animation.add({

    targets: text,
    opacity: 1,
    easing: "easeInOutSine",
    duration: 200,
    delay: 700,
    begin: () => {
      audio2.currentTime = inicioAntecipado / 1000;
      audio2.play();
    },

  });
});
animation.pause();


animacao2.addEventListener("mouseover", () => {

    curve1.classList.add('active')
    curve2.classList.add('active')

    sumir.play()
    animation.play()
    
});
animacao2.addEventListener("mouseout", () => {

    curve1.classList.remove('active')
    curve2.classList.remove('active')

    sumir.restart()
    sumir.pause()

    animation.restart()
    animation.pause()

    audio2.load();

});