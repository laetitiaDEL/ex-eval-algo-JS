//Depuis l'exemple de classe Animal :
//-Instancier 2 nouveaux objets :
//     -objet chien (chien, 4, 50, 9),
//     -objet coq(coq, 2, 40, 3),
//-Modifier la classe Animal :
//    ->modifier la fonction crier pour intégrer les espèces (chien et coq) et afficher dans la console un cris différent,
//-Appeler la fonction crier sur les 4 objets :
//tigre, chat, chien et le coq (pour vérifier si elle fonctionne correctement)
//-Ajouter une méthode dormir qui va 
//    -> afficher dans la console (Zzzzzz),
//-Appeler la méthode dormir sur les objets :
//tigre, chat, chien et coq.

class Animal{
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    couleur;
    //Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    //méthode
    crier(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Grrr");
        }
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");
        }
        if(this.espece == "Chien" || this.espece == "chien"){
            console.log("Waf");
        }        
        if(this.espece == "Coq" || this.espece == "coq"){
            console.log("Cock-a-doodle-do");
        }
    }
    dormir(){
        console.log("Zzzzz");
    }
}
const tigre = new Animal('tigre', 4, 150, 180);
const chat = new Animal('chat', 4, 30,4);

console.log(tigre);
tigre.taille = 180;
tigre.couleur = "Blanc";
console.log(tigre);
tigre.crier();
chat.crier();

const chien = new Animal('chien', 4, 50, 9);
const coq = new Animal('coq', 2, 40, 3);

chien.crier();
coq.crier();

tigre.dormir();
chat.dormir();
chien.dormir();
coq.dormir();