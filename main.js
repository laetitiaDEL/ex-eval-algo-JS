let inputAge = document.getElementById("age");
let categorise = document.getElementById("categorise");
let result = "";


categorise.addEventListener("click", () => {
    let age = inputAge.value;
    if(age<6){
        result = "Hors catégorie ou trop jeune.";
    }else if(age<8){
        result = "Appartient à la catégorie Poussin.";
    }else if(age<10){
        result = "Appartient à la catégorie Pupille.";
    }else if(age<12){
        result = "Appartient à la catégorie Minime.";
    }else{
        result = "Appartient à la catégorie Cadet.";
    }
    document.querySelector("p").innerText = result;
});

//ex5
let mot1 = document.getElementById("mot1");
let mot2 = document.getElementById("mot2");
let mot3 = document.getElementById("mot3");
let tri = document.getElementById("tri");

tri.addEventListener("click", () => {
    let mots = [mot1.value, mot2.value, mot3.value];
    if(JSON.stringify(mots) == JSON.stringify(mots.sort())){
        document.querySelector("h4").innerText = "C'est dans l'ordre."
    }else{
        document.querySelector("h4").innerText = "C'est PAS dans l'ordre."
    }
})