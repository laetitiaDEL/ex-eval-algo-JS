//ex 6

let nom = document.getElementById("article");
let prix = document.getElementById("prix");
let nombre = document.getElementById("nombre");
let calculer = document.getElementById("calculer");

let newArticle = [];

calculer.addEventListener("click", () => {
    newArticle.push(nom.value, prix.value, nombre.value);
    document.querySelector("em").innerText = prix.value*1.2*nombre.value;
})

//ex 7
let users = [];
for(let i=1; i<=5; i++){
    let user = [];
    let userNom = prompt("Nom utilisateur "+i);
    let userPrenom = prompt("Prénom utilisateur "+i);
    let userAge = parseInt(prompt("Âge utilisateur "+i));
    user.push(userNom, userPrenom, userAge);
    users.push(user);
}

let compare = 1000;
let younger;
for(let i=0; i<5; i++){

    if(users[i][2]<compare){
        compare = users[i][2];
        younger = "Le plus jeune est "+users[i][0]+" "+users[i][1];
    }
}
console.log(younger);