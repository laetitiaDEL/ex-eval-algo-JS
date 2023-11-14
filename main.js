//Exercice 11 Boucles :
//Nous avons un jeu de dés que nous souhaitons automatiser.
//Les règles de ce jeu de dès sont les suivantes :
//-Il y à 2 participants : la banque et le joueur.
//-Le jeu dure 5 tours.
//-A chaque tour :
//    --La banque lance un dès de 6 faces (score 1 à 6).
//    --Le joueur lance un dès de 6 faces (score 1 à 6).
//    --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
//    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
//    --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
//-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
//-> Afficher le gagnant et son score (nbr de pts).

let scoreBanque = 0;
let scoreJoueur = 0;

for(let i=1; i<=5; i++){
    let deBanque = Math.floor(Math.random()*6);
    let deJoueur = Math.floor(Math.random()*6);
    console.log("Lancer "+i+" : Banque : "+deBanque+" ; Joueur : "+deJoueur);
    if(deJoueur>deBanque){
        scoreJoueur ++;
    }else if(deJoueur == deBanque){
        scoreJoueur += 2;
    }else{
        scoreBanque += 1;
    }
}

if(scoreBanque>scoreJoueur){
    console.log("La banque gagne avec "+scoreBanque+" points.");
}else if(scoreBanque == scoreJoueur){
    console.log("Egalité à "+scoreBanque+" points.");
}else{
    console.log("Le joueur gagne avec "+scoreJoueur+" points.");
}