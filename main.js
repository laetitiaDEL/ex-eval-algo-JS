//Exercice 13 Classes et Objet :
//Créer une classe Maison avec comme attributs (constructeur):
//-Nom,
//-Longueur,
//-Largeur,
//Créer une méthode périmètre de la maison,
//Créer une méthode surface de la maison,
//Afficher le périmètre dans la console en mètre linéaire,
//Afficher la surface dans la console en mètre carré,

//Bonus :
//Ajouter un attribut nbrEtage à la maison,
//Afficher dans la console la surface pour 3 étages en mètre carrés.

class Maison{
    //attributs
    nom;
    longueur;
    largeur;
    nbrEtages;
    //constructeur
    constructor(newNom, newLongueur, newLargeur, newNbrEtages){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
        this.nbrEtages = newNbrEtages;
    }
    //méthodes
    perimetre(){
        this.perimetreMaison = (this.largeur+this.longueur)*2;
        console.log(this.perimetreMaison);
    }
    surface(){
        this.surfaceMaison = (this.largeur*this.longueur*this.nbrEtages);
        console.log(this.surfaceMaison);
    }
}

const maMaison = new Maison('Ma maison', 10, 20, 3);

maMaison.perimetre();
maMaison.surface();