
// ------ iniciar animacao e audio rio raso
const rioAudio = document.getElementById("rio"),
animacao1 = document.querySelector(".modal-poema-1"),
diminuir = document.querySelector("#diminuir"),
aumentar = document.querySelector("#aumentar");

animacao1.addEventListener("mouseover", () => {
    diminuir.classList.add('active')
    aumentar.classList.add('active')
    rioAudio.play();

});
animacao1.addEventListener("mouseout", () => {
    diminuir.classList.remove('active') 
    aumentar.classList.remove('active') 
    rioAudio.load();
});


// ------ iniciar animacao manso rio
const animacao2 = document.querySelector(".modal-poema-2"),
audio2 = document.getElementById("audio-2"),
curve1 = document.querySelector(".curve-1"),
curve2 = document.querySelector(".curve-2");

var textElements = document.querySelectorAll(".text-fall");

animacao2.addEventListener("mouseover", () => {
    curve1.classList.add('active')
    curve2.classList.add('active')

    fallAnimation();

});
animacao2.addEventListener("mouseout", () => {
    curve1.classList.remove('active')
    curve2.classList.remove('active')
    audio2.load();

});



index = 0;
function fallAnimation() {
    if(index < textElements.length) {
        const span = textElements[index];
        span.style.animationName = 'fall';
        audio2.play()
        console.log(span)
        
        index++;
        setTimeout(fallAnimation, 2000);
    }

};
