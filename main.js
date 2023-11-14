//ex 9
//Exercice 9 Conditions :
//Une boulangerie vend des chocolatines. Pour calculer le prix qu'elle va facturer a ses clients elle a besoin d'un programme. 
//-Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
//-Les 10 suivantes coûtent 1€30 pièce et 
//-Au-delà elles coûtent 1€20 pièce.
//Écrire un programme qui calcule le prix à payer  en fonction de la quantité (depuis un prompt) 
//Afficher dans la console le montant à payer.

let nombre = parseInt(prompt("Combien de PAINS AU CHOCOLAT ?"));
let prix;
if(nombre <= 10){
    prix = nombre*1.40;
}else if(nombre<=20){
    prix = 10*1.4 + ((nombre-10)*1.3);
}else{
    prix = 10*1.4 + 10*1.3 + ((nombre-20)*1.2);
}

console.log(prix+"€");