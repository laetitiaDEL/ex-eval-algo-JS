//Exercice 16 classe et Objet :
//Créer une classe Personnage qui va contenir les éléments suivants :
//-nom, force, défense, vie
//-un méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à défense (notre personnage),
//Créer une classe Combat qui  va contenir éléments suivants :
//-nbr de tour, score joueur 1, score joueur 2,
//-Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
//Cela va s'exécuter autant de tour que la valeur nbr de tour. 
//Celui qui arrive à zéro à perdu.
//Ella va afficher le nom du gagnant.

class Personnage{
    nom;
    force;
    defense;
    vie;

    constructor(newNom, newForce, newDefense, newVie){
        this.nom = newNom;
        this.force = newForce;
        this.defense = newDefense;
        this.vie = newVie;
    }

    attack(perso2){
        perso2.vie -= (this.force-perso2.defense);
    }

    display(){
        console.log(this.nom+" a maintenant "+this.vie+" point(s) de vie.");
    }
}

class Combat{
    nbrTour;
    J1;
    J2;

    constructor(newNbrTour, newJ1, newJ2){
        this.nbrTour = newNbrTour;
        this.J1 = newJ1;
        this.J2 = newJ2;
    }

    lancer(){
        for(let i=0; i<this.nbrTour; i++){
            if(this.J2.vie>this.J1.force-this.J2.defense){
                this.J1.attack(this.J2);
                this.J2.display();
            }else{
                console.log(this.J2.nom+" n'a plus de PV. "+this.J1.nom+" gagne.");
                return;
            }
            if(this.J1.vie>this.J2.force-this.J1.defense){
                this.J2.attack(this.J1);
                this.J1.display();
            }else{
                console.log(this.J1.nom+" n'a plus de PV. "+this.J2.nom+" gagne.");

                return;
            }
        }
    }
}

const sorcier = new Personnage("Grinwald", 37, 4, 48);
const tank = new Personnage("Grump", 22, 10, 74);

const combat1 = new Combat(10, sorcier, tank);

combat1.lancer();