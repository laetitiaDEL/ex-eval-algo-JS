//Exercice 14 Classes et Objet :
//Créer un programme permettant de Calculer l’IMC d’une personne
//    -Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
//    -Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la virgule si possible)
//    -Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console : 
//Le nom de la personne, son poids, sa taille et son imc dans une phrase 
//    -En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau de nouvelle instances de la class) 
//    -Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la fonction display .

class Imc{
    nom;
    poids;
    taille;

    constructor(newNom, newPoids, newTaille){
        this.nom = newNom;
        this.poids = newPoids;
        this.taille = newTaille;
    }

    calculIMC(){
        this.calcul = (this.poids/(this.taille*this.taille)).toFixed(2);
    }

    displayIMC(){
        console.log("L'IMC de "+this.nom+" ("+this.poids+"kg pour "+this.taille+"m) est de "+this.calcul);
    }
}

const mob = new Imc("Random", 70, 1.7);
mob.calculIMC();
mob.displayIMC();

let list = [new Imc("Pierre", 65, 1.75), new Imc("Paul", 72, 1.82), new Imc("Jacques", 85, 1.92)];

list.forEach(e => {
    e.calculIMC();
    e.displayIMC();
});