//Exercice 23 DOM :
//Partie HTML :
//Ajouter dans la page les éléments suivants :
//-1 input type text (id = email),
//-1 input type password(id= password),
//-1 input type button (id=bt)
//Partie JS :
//1 Ajouter un écouteur événement (keyup (touche clavier est relâchée )-> input (id= email) 

//         -> vérifier si le contenu de l'input (id= email) match  le pattern suivant :
//                   --

const parag = document.getElementById("error");


let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btn = document.getElementById("bt");

btn.addEventListener("click", () => {
  let mail = document.getElementById("email");

  if(regexEmail.test(email.value)){
    mail.style.backgroundColor = "green";
  }else{
    mail.style.backgroundColor = "red";
  }

  try{
    if((!regexEmail.test(mail.value)) || (!regexPassword.test(password.value))){
      throw "Invalide.";
    }
    if((regexEmail.test(mail.value)) && (regexPassword.test(password.value))){
      parag.textContent = "Valide.";
    }
  }
  catch(error){
    parag.textContent = error;
  }
})

//         -> si le email match le pattern mettre l'input (email) en vert (backgroundColor)
//         -> sinon mettre l'input (email) en rouge(backgroundColor)

//2 Ajouter un écouteur événement (blur(désélection de l'input)-> input (id= password) 
//         -> vérifier si le contenu de l'input (id= password) match  le pattern suivant :
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
let password = document.getElementById("password");
password.addEventListener("blur", () => {
  if(regexPassword.test(password.value)){
    password.style.backgroundColor = "green";
  }else{
    password.style.backgroundColor = "red";
  }
})

let mail = document.getElementById("email");



//         -> si le password match le pattern mettre l'input (password) en vert (backgroundColor)
//         -> sinon mettre l'input (password) en rouge(backgroundColor)
//Bonus : Ajouter un paragraphe (id = error)  dans la partie HTML :
//Afficher à l'intérieur :
//Si le password et l' email sont valides => valide,
//Si le password ou l' email sont invalides => invalide ,
//Utiliser test() plutôt que match() dans vos conditions.