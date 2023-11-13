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

