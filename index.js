let bouton_recrutement = document.getElementById('btnRecrutement');
let bouton_interim = document.getElementById('btnInterim');
let bouton_performance = document.getElementById('btnPerformance');
let bouton_transformation = document.getElementById('btnTransformation');
let backColor = document.getElementById('bloc_1');

let btn_sliders = document.getElementsByClassName('text-btn-slider');

for(let i = 0; i < btn_sliders.length; i++) {
    /* Je peux créer une variable : let mybtn = btn_sliders[i]; pour le mettre partout et plus lisible */
    btn_sliders[i].addEventListener("click", function() {
        let recupColor = btn_sliders[i].getAttribute("color-background");
        console.log("couleur " + btn_sliders[i].style.backgroundColor)
        if (btn_sliders[i].style.backgroundColor == '') {
            backColor.style.backgroundColor = recupColor;
            btn_sliders[i].style.backgroundColor = recupColor;
        } else {
            backColor.style.backgroundColor = '#5593b3';
            btn_sliders[i].style.backgroundColor = '';
        }
    
        console.log("test " + i);
    })
}
