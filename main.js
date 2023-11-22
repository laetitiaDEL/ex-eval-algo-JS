//Depuis la base de code ci-dessus récupérer :
//température (main),
//nom de la ville (name),
//lat et long (coord)
//Stocker ces valeurs dans des variables.
//Dans page HTML vous allez ajouter des paragraphes,
//injecter ces valeurs dans les paragraphes.
//NB : utiliser les méthodes (createElement, appendChild, textContent).
//Bonus : convertir la température en degrés celcius 


let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";
let ville = document.querySelector("em");
let body = document.querySelector("body");

const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                        ville.textContent = json.name;
                        let temp = document.createElement("p");
                        temp.textContent = (json.main.temp -273.15).toFixed(1)+"°C";
                        let coord = document.createElement("p");
                        coord.textContent = JSON.stringify(json.coord);
                        let weatherImg = document.createElement("img");
                        weatherImg.setAttribute("src", "https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png");
                        body.appendChild(weatherImg);
                        body.appendChild(temp);
                        body.appendChild(coord);
                    });

//Bonus 2 : Afficher à la place de la valeur du temps qu'il fait (weather.main) l'image correspondante (dans une balise image).
//Le nom de l'image est dans wheater.icon
//Ressources :
//Documentation :
//https://openweathermap.org/weather-conditions
//icones :
//https://openweathermap.org/img/wn/10d@2x.png
//https://openweathermap.org/img/wn/11d@2x.png
//https://openweathermap.org/img/wn/13d@2x.png