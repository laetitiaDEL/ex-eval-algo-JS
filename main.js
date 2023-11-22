let nom = document.getElementById("nom");
let temps = document.getElementById("temps");
let temperature = document.getElementById("temperature");
let ville = "";

let newInput = document.createElement("input");
newInput.setAttribute("id", "newVille");
let newBtn = document.createElement("button");
newBtn.textContent = "Entrer";
let body = document.querySelector("body");
body.append(newInput, newBtn);

//-Ajouter un écouteur d'événement click  sur le bouton qui va :
let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
  let inputVille = document.getElementById("newVille").value;
  ville = inputVille;
  let urlApi = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=6f88826d767f323ad19cd282444924e9";
  const apiMeteo = fetch(urlApi)
                    .then(async response =>{
                      if(response.status == 404){
                        let erreur = document.createElement("p");
                        erreur.textContent = "Cette ville n'existe pas.";
                        body.appendChild(erreur);
                      }else{
                        const json = await response.json();
                        console.log(json);
                        nom.textContent = json.name;
                        temperature.textContent = (json.main.temp-273.15).toFixed(1)+"°C";
                        temps.textContent = json.weather[0].main;
                      }

                    })
})
//-Récupérer la valeur de l'input et la passer dans l'url (à la place de ville),
//-Exécuter le code de partie non Bonus (mais avec la ville saisie dans l'input)
//-Gérer si le code est 404 (reponse.status == 404) et afficher dans la page la ville n'existe pas. 

//Exercice 27 API et FETCH :
//Url météo pour récupérer la météo avec le nom d'une ville  :
//https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9


//Partie HTML :
//Créer une page HTML avec les éléments suivants :
//-Un paragraphe (id=nom),
//-Un paragraphe (id=temps),
//-Un paragraphe (id=temperature)
//Partie JS :
//-en utilisant le code ci-dessus :
//-Récupérer les 3 paragraphes HTML,
//-Passer un nom de ville valide  (à la place de ville dans la variable ville)
//-Récupérer depuis le json les données suivantes :
//name(nom de ville),
//main.temp (météo en degrés Kelvin),
//weather.main (le temps qu'il fait)
//Afficher dans la page dans les paragraphes les données correspondantes.
//Convertir la température en degrés Celcius.