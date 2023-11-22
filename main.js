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
                        console.log(coord);
                        body.appendChild(temp);
                        body.appendChild(coord);
                    });

                    