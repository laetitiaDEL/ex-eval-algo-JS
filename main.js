//Exercice 20 DOM :
//Créer une page HTML qui va contenir les éléments suivants :
//-Un titre h1 -> "Liste des utilisateurs",
//-Une div,
//-Dans la div ajouter :
//        --1 balise img,
//        --3 paragraphes,
//Depuis l'objet JS ci-dessous (remplacer les valeurs par vos propres informations):
 const user = {
  'id' : 1,
  'nom': 'Deloirs',
  'prenom': 'Laëtitia',
  'age': 31,
  'image' :'./logo.jpg'
}

//-Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
//-Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
///-Remplacer l'image par l'url contenu dans user.image
//Mettre en forme en JS les éléments suivants :
//-paragraphe nom, prenom, age : police taille 11 px, couleur blue,
//-taille de l'image : 100 px de large et 100 px de long,
//-Aligner l'image à en haut à droite et ajouter un margin de 10 px.
//-remplacer la couleur de fond de la div : rgb(220, 220, 220).
//NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent

let div = document.querySelector("div");
div.id = user.id;

let parags = document.querySelectorAll("p");
parags[0].textContent = user.nom;
parags[1].textContent = user.prenom;
parags[2].textContent = user.age;

let img = document.querySelector("img");
img.src = user.image;

parags.forEach(element => {
    element.style = "font-size: 11px; color: blue;"
});

img.style.width = "100px";
img.style.height = "100px";
img.style.display = "block";
img.style.margin = "10px";
img.style.marginLeft = "auto";

div.style.backgroundColor = "rgb(220, 220, 220)";