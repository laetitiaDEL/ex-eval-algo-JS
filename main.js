//Exercice 12 Boucles :
//Ecrire un programme qui demande un nombre de départ (prompt), et qui ensuite affiche la table de multiplication de ce nombre dans la console, présentée comme suit (cas où l'utilisateur entre le nombre 7) :
//Table de 7 :
//7 x 1 = 7
//7 x 2 = 14
//7 x 3 = 21
//…
//7 x 10 = 70

let nombre = parseInt(prompt("Choisir un nombre :"));
console.log("Table de "+nombre+" :");
for(let i=1; i<=10; i++){
    console.log(nombre+" x "+i+" = "+nombre*i);
}