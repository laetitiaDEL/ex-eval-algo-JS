//Exercice 28 API et fetch :
//En utilisant l'API :
//https://adresse.data.gouv.fr/api-doc/adresse
//Partie HTML :
//Ajouter les éléments suivants :
//-un input text (id=ville_d), (ville de départ)
//-un input text (id=ville_a), (ville d'arrivée)
//-un bouton (id=bt),
//-un paragraphe (id=resultat),
//Partie JS :

let bt = document.getElementById("bt");
bt.addEventListener("click", ()=>{
  let ville_d = document.getElementById("ville_d").value;
  let ville_a = document.getElementById("ville_a").value;
  const api = fetch("https://api-adresse.data.gouv.fr/search/?q="+ville_d)
                .then(async response=>{
                  let json = await response.json();
                  console.log(json);
                })
});
//Ajouter un écouteur événement clic sur le bouton qui va éffectuer le traitement suivant :
//-Récupérer depuis un appel api les coordonnées lat et long de la ville_d,
//-Récupérer depuis un autre appel api les coordonnées lat et long et la ville_a,
//-Passer les valeurs dans la fonction ci-dessous (calcule la distance en kilomètre entre 2 jeux de coordonnées :
function calcul(latDepart, longDepart, latArrive, longArrive){
    //facteur d'échelle
    const factE = 1.852;
    //calcul angle x en deg
    const xDeg = Math.abs(latDepart-latArrive)*Math.cos((longDepart+longArrive)/2);
    //calcul angle y en deg
    const yDeg = Math.abs(longDepart-longArrive);
    //calcul de la distance en deg
    const distDeg = Math.sqrt((xDeg**2)+(yDeg**2));
    //conversion en kilométres
    const distance = (factE*60*distDeg).toFixed(2);
    return distance;
}

//-Afficher la distance dans le paragraphe (id=resultat), sous la forme :
//la distance est de xxx km
//Bonus :
//-Gérer les erreurs : 
//-si la ville_a ou la ville_d n' existe pas,
//-afficher dans les inputs ville_a et ou ville_b (placeholder) la ville avec son nom n'existe pas