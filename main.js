//Exercice 22 DOM :
//Transformer l'exercice 6 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
//Partie HTML :
//Ajouter  les éléments suivants :
//-un titre h1 -> calculer le prix TTC,
//-un input de (type text, id = prixHt),
//-un input de (type text, id = quantite),
//-un bouton (onclick =calculer()),
//-un paragraphe (id= resultat),
//Partie JS :
//Créer une fonction calculer :
//-récupérer les valeurs des 2 inputs,
//-refaire le calcul comme dans l'exercice 8 (correction),
//-Afficher le résultat dans le paragraphe (id= resultat)

let resultat = document.getElementById("resultat");

function calculer(){
  let prix = document.getElementById("prixHT");
  let nombre = document.getElementById("quantite");
  resultat.textContent = prix.value*1.2*nombre.value+"€.";
}