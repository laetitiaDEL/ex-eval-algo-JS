//Exercice 10 Boucles :
//Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
//Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
//A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
//-Si il réussit à découvrir le nombre en moins de 10 essais 
            //-> afficher : son entrainement acharné a payé, 
//-Sinon 
           //-> afficher : il est un mauvais mentaliste et il va devoir changer de métier.
//Il souhaite savoir en cas de réussite (nombre trouvé en moins de 10 essais) 
           //-> afficher : le nombre d'essai qu'il a effectué pour trouver le nombre.


let mystery = Math.floor(Math.random()*100);
console.log(mystery);
let msg = "Devinez le nombre mystère...";
let cnt = 1;
let statut = true;

while(statut){
    let number = parseInt(prompt(msg));

        if(cnt<=10){
            if(isNaN(number)){
                console.log("Entrez un nombre !");
            }else{
                if(number<mystery){
                    msg = "C'est plus !";
                }else if(number>mystery){
                    msg ="C'est moins !";
                }else{
                        console.log("Le nombre mystère était "+mystery+". Votre entraînement acharné a payé. Vous avez réussi en "+cnt+" essais.");
                        statut = false;
                }
            }
        }else{
            console.log("Vous êtes mauvais, il va falloir penser à changer de métier...")
            statut = false;
        }
        cnt ++;
}




