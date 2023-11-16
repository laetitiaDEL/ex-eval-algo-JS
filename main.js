//Exercice 18 Classe et Objet :
//Gérer une PME
//Cahier des charges :

//-Un Salarié a un nom, prénom, âge, salaire mensuel
//Il est payé sur N mois.
//En plus il y a XXX de charges

//-Une Pme c’est un nom, une équipe de plusieurs salariés
//Grace à ses ventes elle a des revenus R
//Mais aussi … : 
//des frais fixes FF (impôts etc…)
//Des frais d’achats de matériel et de logiciels FA

//TODO : 
//Créer une classe Pme et une classe Employee
//Utiliser des fonctions
//Faire le bilan annuel de l’entreprise et l’afficher en console.
//(Bilan reste en solde de la Pme)

//Détails : 
//3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
//R = 300000 (trois cent mille)
//FF = 20000 (vingt mille)
//FA = 50000 (cinquante mille)
//N = 12
//XXX = 90%

class Employee{
    constructor(newNom, newPrenom, newSalaireMensuel, newNbMois, newCharges){
        this.nom = newNom;
        this.prenom = newPrenom;
        this.salaireMensuel = newSalaireMensuel;
        this.nbMois = newNbMois;
        this.charges = newCharges;
    }

    employeeCost(){
        return (this.salaireMensuel)*this.nbMois*this.charges/100;
    }
}

class Pme{
    constructor(newNom, newEquipe, newR, newFf, newFa){
        this.nom = newNom;
        this.equipe = newEquipe;
        this.r = newR;
        this.ff = newFf;
        this.fa = newFa;
    }

    allEmployeesCost(){
        let tot = 0;
        this.equipe.forEach(employee => {
            tot += employee.employeeCost();
        });
        return tot;
    }

    bilan(){
        return this.r - (this.allEmployeesCost()+this.ff+this.fa);
    }
}

let N = 12;
let XXX = 90;

let employee1 = new Employee("Nom1", "Prenom1", 2000, N, XXX);
let employee2 = new Employee("Nom2", "Prenom2", 3000, N, XXX);
let employee3 = new Employee("Nom3", "Prenom3", 4000, N, XXX);

let equipe = [employee1, employee2, employee3];

let maPme = new Pme("Ma PME", equipe, 300000, 20000, 50000);
console.log(maPme.bilan());