const bt = document.getElementById('bt');
const nom = document.getElementById('name');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');

let list = [];

bt.addEventListener("click", ()=>{
    let person = [nom.value, firstname.value, email.value];
    list.push(person);
    
});

//si bouton pas type button mais type submit : 
//document.getElementById('form').onsubmit = (event)=>{
//    event.preventDefault();
//    let person = [nom.value, firstname.value, email.value];
//    list.push(person);
//}

console.log(list);