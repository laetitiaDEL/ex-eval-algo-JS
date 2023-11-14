//ex 8
let valeurs = [];
let nombre = parseInt(prompt("Combien de valeurs souhaitez-vous entrer ?"));

for(let i=1; i<=nombre; i++){
    let valeur = prompt("Valeur "+i);
    valeurs.push(valeur);
}
let pos=0;
let neg=0;
let res;
let compare = Math.abs(valeurs[0]);

for(let i=0; i<valeurs.length; i++){
    if(valeurs[i]>=0){
        pos++;
    }else{
        neg++;
    }

    if(Math.abs(valeurs[i])>compare){
        compare = Math.abs(valeurs[i]);
        res= "La valeur absolue la plus élevée est "+Math.abs(valeurs[i]);
    }
}
let phrasePos;
if(pos>1){
    phrasePos = "Il y a "+pos+" valeurs positives.";
}else if(pos==1){
    phrasePos = "Il y a une valeur positive.";
}else{
    phrasePos = "Il n'y a pas de valeur positive.";
}
let phraseNeg;
if(neg>1){
    phraseNeg = "Il y a "+neg+" valeurs négatives.";
}else if(neg==1){
    phraseNeg = "Il y a une valeur négative.";
}else{
    phraseNeg = "Il n'y a pas de valeur négative.";
}

console.log(phrasePos);
console.log(phraseNeg);
console.log(res);