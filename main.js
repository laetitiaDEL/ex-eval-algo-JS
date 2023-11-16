//Exercice 17 classe et Objet :
//Gérer des compte en banque :
//Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
//Faire un scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
//Puis Alex retire 100
//Puis Marco fait un virement de 300 à Clovis
//Enfin Alex tente un retrait de 600
//Afficher tous les soldes finaux.
//Ces compte sont placés dans un tableau associatif de clients

//Bonus :
//Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépassent le solde du compte bancaire),
//Tester avec une tentatives de retret de Alex de 1200 €

class CompteBancaire{
    proprietaire;
    solde;

    constructor(newProprietaire, newSolde){
        this.proprietaire = newProprietaire;
        this.solde = newSolde;
    }

    credit(nb){
        this.solde += nb;
        console.log(this.proprietaire+" crédite son compte de "+nb+"€.");
        this.display();
    }

    retrait(nb){
        if(this.solde>=nb){
            this.solde -= nb;
            console.log(this.proprietaire+" débite son compte de "+nb+"€.");
            this.display();
        }else{
            console.log("Retrait impossible, solde insuffisant.")
        }

    }

    display(){
        console.log(this.proprietaire+" a "+this.solde+"€ sur son compte.")
    }

    virement(nb, versCompte){
        if(this.solde>=nb){
            this.solde -= nb;
            versCompte.solde += nb;
            console.log(this.proprietaire+" fait un virement de "+nb+"€ à "+versCompte.proprietaire);
            this.display();
            versCompte.display();
        }else{
            console.log("Virement impossible, solde insuffisant.")
        }

    }
}

let alex = new CompteBancaire("Alex", 1000);
let clovis = new CompteBancaire("Clovis", 1000);
let marco = new CompteBancaire("Marco", 1000);

let clients = [alex, clovis, marco];

alex.retrait(100);
marco.virement(300, clovis);
alex.retrait(600);
alex.retrait(1200);
console.log(clients);