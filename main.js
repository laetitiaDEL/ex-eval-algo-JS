//Exercice 15 Classe et Objet :
//-Créer une classe Vehicule avec les attributs suivants :
//nom, couleur, nbrRoue, vitesse,
//-Instancier 2 nouveaux Vehicule avec les paramètres suivants :
//-Objet voiture (nomVehicule = « Mercedes CLK », nbrRoue = 4, vitesse 250),
//-Objet moto (nomVehicule = « Honda CBR », nbrRoue = 2, vitesse = 280),
//-Créer une fonction detect() qui détecte si le véhicule est une moto ou une voiture (la méthode retourne une string  moto ou voiture avec return),
//-Exécuter la méthode detect() sur les 2 objets voiture et moto,
//-Afficher le type de Vehicule (méthode detect afficher dans la console)
//-Créer une méthode boost qui ajoute 50 à la vitesse d’un Vehicule
//-Appliquer la méthode boost a la voiture,
//-Afficher la nouvelle vitesse de la voiture,

//Bonus :
//-Créer une méthode plusRapide() dans la classe Vehicule qui compare la vitesse des différents véhicules (moto et voiture) et retourne le Vehicule le plus rapide des 2 avec un return.
//-Exécuter la méthode plusRapide(),
//-Afficher le Vehicule le plus rapide dans la console.

class Vehicule{
    nom;
    couleur;
    nbrRoues;
    vitesse;

    constructor(newNom, newCouleur, newNbrRoues, newVitesse){
        this.nom = newNom;
        this.couleur = newCouleur;
        this.nbrRoues = newNbrRoues;
        this.vitesse = newVitesse;
    }

    detect(){
        if(this.nbrRoues == 2){
            return "Le véhicule "+this.nom+" est une Moto";
        }
        if(this.nbrRoues == 4){
            return "Le véhicule "+this.nom+" est une Voiture";
        }
    }

    boost(){
        this.vitesse += 50;
    }

    plusRapide(vehicule){
        if(this.vitesse>vehicule.vitesse){
            return "Le véhicule le plus rapide est "+this.nom;
        }else if(this.vitesse<vehicule.vitesse){
            return "Le véhicule le plus rapide est "+vehicule.nom;
        }else{
            return "Les deux véhicules roulent à la même vitesse."
        }
    }
}

//-Objet voiture (nomVehicule = « Mercedes CLK », nbrRoue = 4, vitesse 250),
const voiture = new Vehicule("Mercedes CLK", "rouge", 4, 250);
//-Objet moto (nomVehicule = « Honda CBR », nbrRoue = 2, vitesse = 280),
const moto = new Vehicule("Honda CBR", "noir", 2, 280);

console.log(moto.detect());
console.log(voiture.detect());

voiture.boost();

console.log(voiture.vitesse);

console.log(moto.plusRapide(voiture));