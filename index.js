let pageBase = document.getElementById("pageBase");
let pageRecrutement = document.getElementById("pageRecrutement");
let pageInterim = document.getElementById("pageInterim");
let pagePerformance = document.getElementById("pagePerformance");
let pageTransition = document.getElementById("pageTransition");

let img1Bloc1 = document.getElementById("img1Bloc1");
let img2Bloc1 = document.getElementById("img2Bloc1");
let img3Bloc1 = document.getElementById("img3Bloc1");
let img4Bloc1 = document.getElementById("img4Bloc1");
let img5Bloc1 = document.getElementById("img5Bloc1");

let back1 = (pageBase, img1Bloc1);
let back2 = (pageRecrutement, img2Bloc1);
let back3 = (pageInterim, img3Bloc1);
let back4 = (pagePerformance, img4Bloc1);
let back5 = (pageTransition, img5Bloc1);

let backColor = document.getElementById('bloc_1');

let btnSliders = document.getElementsByClassName('text-btn-slider');

for(let i = 0; i < btnSliders.length; i++) {
    /* Je peux créer une variable : let mybtn = btn_sliders[i]; pour le mettre partout et plus lisible */
    btnSliders[i].addEventListener("click", function() {
        let recupColor = btnSliders[i].getAttribute("color-background");
        if (btnSliders[i].style.backgroundColor == '') {
            btnSliders[i].style.backgroundColor = recupColor;
        } else {
            div.appendChild(imgFondBase);
            btnSliders[i].style.backgroundColor = '';
        }
    })
}
