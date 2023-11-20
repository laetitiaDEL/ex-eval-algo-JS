//Exercice 21 DOM :
//Depuis l'exemple ci-dessus et la correction de l'exercice 9 (prix des chocolatines) :
//-Dans la page HTML ajouter les éléments suivants :
//      --un titre h1 (calculer le prix à payer),
//      --un input de type text ( id = quantite),
//      --un bouton (onclick = calculer()),
//      --un paragraphe (id= resultat),

//-Dans la partie JS :
//créer une fonction qui va se nommer calculer et qui va effectuer le calcul du prix à payer des chocolatines :
//récupérer la valeur de l'input (id quantité) avec value,
//afficher dans le paragraphe (id = résultat) le montant à payer.
//Bonus : Tester si le champ quantité est vide 
//      => afficher dans le paragraphe "Veuillez choisir un nombre de chocolatine"
const parag = document.getElementById("resultat");

function calculer(){
    const quantite = document.getElementById("quantite").value;

    try{
      if(quantite == ""){
        throw new Error("Veuillez gnagna");
      }
      let prix = 0;
      if(quantite <= 10){
        prix = quantite*1.40;
      }else if(quantite<=20){
        prix = 10*1.4 + ((quantite-10)*1.3);
      }else if(quantite >= 21){
        prix = 10*1.4 + 10*1.3 + ((quantite-20)*1.2);
      }
      parag.textContent = prix+"€";
    }
    catch(error){
      parag.textContent = error.message;
    }

}