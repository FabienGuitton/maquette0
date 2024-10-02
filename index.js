let bouton_recrutement = document.getElementById('menu_changement_recrutement');
let bouton_interim = document.getElementById('menu_changement_interim');
let bouton_performance = document.getElementById('menu_changement_performance');
let bouton_transformation = document.getElementById('menu_changement_transformation');
let backColor = document.getElementById('bloc_1');

bouton_recrutement.addEventListener('click', function(){
    backColor.style.backgroundColor = "#2ca0ab";
    bouton_recrutement.style.backgroundColor = "#2ca0ab";
});

bouton_interim.addEventListener('click', function(){
    backColor.style.backgroundColor = "#b54340";
    bouton_interim.style.backgroundColor = "#b54340";
});

bouton_performance.addEventListener('click', function(){
    backColor.style.backgroundColor = "#dba569";
    bouton_performance.style.backgroundColor = "#dba569";
});

bouton_transformation.addEventListener('click', function(){
    backColor.style.backgroundColor = "#005a3d";
    bouton_transformation.style.backgroundColor = "#005a3d";
});
