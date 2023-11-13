//Variable et calcul
let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}
// calculer la moyenne de notes et l'afficher dans la console 
let totNotes = 0;
notes.forEach((note) => {
    totNotes += note;
})
//console.log(notes);
console.log(totNotes/nombre);

//easter egg
let joke = document.getElementById('joke');
joke.addEventListener("click", ()=>{
    let request = fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then((value) =>{
        return value.json();
    })
    .then((result) => {
        document.querySelector("h2").innerText = `${result.setup}${result.delivery}`;
    })
    .catch((error) => {
        document.querySelector("h2").innerText = error;
    })
})

//conditions
let nb1 = document.getElementById('nb1');
let nb2 = document.getElementById('nb2');
let calc = document.getElementById('calc');
let posNeg = document.getElementById('pos-neg');

calc.addEventListener("click", () => {
    console.log(nb1.value);
    console.log(nb2.value);
    let result = "";
    if((nb1.value>=0 && nb2.value>=0) || (nb1.value<=0 && nb2.value<=0)){
        if((nb1.value==0) || (nb2.value == 0)){
            result = "C'est nul.";
        }else{
            result = "C'est positif.";
        }
    }else{
        result = "C'est négatif.";
    }
    posNeg.innerText = result;
    console.log(result);
})