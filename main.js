let nom = document.getElementById("article");
let prix = document.getElementById("prix");
let nombre = document.getElementById("nombre");
let calculer = document.getElementById("calculer");

let newArticle = [];

calculer.addEventListener("click", () => {
    newArticle.push(nom.value, prix.value, nombre.value);
    document.querySelector("em").innerText = prix.value*1.2*nombre.value;
})