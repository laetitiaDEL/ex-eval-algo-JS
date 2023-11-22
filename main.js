//Exercice 26 DOM :
//Depuis la correction de l'exercice 25 :
//Créer une clé "tasks" qui va avoir comme valeur un tableau vide dans le localStorage (  []  ) 
//pour éviter que le clé tasks soit réécrite chaque fois :
//création du tableau
localStorage.getItem('tasks') == null ? localStorage.setItem("tasks", []):false;

//Modifier la fonction addTask pour qu'elle éffectue le traitement suivant :
//-Réutiliser le code de la correction de l'exercice 25.
//Ajouter dans la partie html sur le body l'attribut : 
//-onload="showAllTask()"
//Ajouter une nouvelle méthode showAllTasks :
function showAllTasks(){
  let tabTasks = localStorage.getItem('tasks').split(',');
  tabTasks.forEach(element => {
    if(element !== ""){
      let div = document.getElementById("tasks");
      let newTask = document.createElement("div");
      newTask.classList.add("container");
      let pNewTask = document.createElement("p");
      pNewTask.textContent = element;
      let suppr = document.createElement("button");
      suppr.setAttribute("id", "delete");
      suppr.setAttribute("onclick", "deleteTask(this)");
      suppr.textContent = "Supprimer tâche";
      let update = document.createElement("button");
      update.setAttribute("id", "update");
      update.setAttribute("onclick", "updateTask(this)");
      update.textContent = "Modifier tâche";
      newTask.appendChild(pNewTask);
      newTask.appendChild(suppr);
      newTask.appendChild(update);
      div.appendChild(newTask);
    }
  });
}
//-depuis la clé tasks du localStorage et la tansformer en tableau split(',')
//-Parcourir le tableau (localstorage) et générer les tâches (comme dans la fonction addTask())


function addTask(){
  //le code ci-dessous  : récupére la clé tasks dans le localstorage 
  //et le met à jour avec la valeur saisie dans l'input du formulaire
  //récupération de l'input ('#task)
  let valeur = document.querySelector('#task').value;
  //récupérer dans une variable la valeur clé ('tasks')
  let tasks = localStorage.getItem('tasks');
  //test si la clé tasks dans localstorage est vide
  if(tasks==""){
    tasks+= valeur;
  }
  //test sinon elle n'est pas vide
  else{
      //transforme en tableau
      tasks = tasks.split(",");
      //ajoute la valeur de l'input au tableau
      tasks.push(valeur);
  }
  //mise à jour de la clé
  localStorage.setItem('tasks',tasks);

  let task = document.getElementById("task").value;
  let div = document.getElementById("tasks");
  let newTask = document.createElement("div");
  newTask.classList.add("container");
  let pNewTask = document.createElement("p");
  pNewTask.textContent = task;
  let suppr = document.createElement("button");
  suppr.setAttribute("id", "delete");
  suppr.setAttribute("onclick", "deleteTask(this)");
  suppr.textContent = "Supprimer tâche";
  let update = document.createElement("button");
  update.setAttribute("id", "update");
  update.setAttribute("onclick", "updateTask(this)");
  update.textContent = "Modifier tâche";
  newTask.appendChild(pNewTask);
  newTask.appendChild(suppr);
  newTask.appendChild(update);
  div.appendChild(newTask);
}

function delAllTasks(){
  let allTasks = document.querySelectorAll("div.container");
  allTasks.forEach(element => {
    element.remove();
  });
  localStorage.clear();
}

function reload(){
  location.reload();
}

function deleteTask(task){
  let tasks = localStorage.getItem('tasks');
  let tabTasks = tasks.split(',');
  for(let i=0; i<tabTasks.length; i++){
    if(tabTasks[i] == task.parentNode.firstChild.textContent){
      let finTabTasks = tabTasks.splice(i,1);
    }
  }
  localStorage.setItem('tasks', tabTasks);
  task.parentNode.remove();
}

let ancien = "";
let statut = true;
function updateTask(task){
  if(statut){
    let div = task.parentNode;
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "correction");
    input.setAttribute("value", task.parentNode.firstChild.textContent);
    ancien = input.value;
    div.replaceChild(input, div.firstChild);
    statut = false;
  }else{
    let div = task.parentNode;
    let tasks = localStorage.getItem('tasks');
    let tabTasks = tasks.split(',');
    let inputValue = document.getElementById("correction").value;
    console.log(inputValue);
    let newParag = document.createElement("p");
    for(let i=0; i<tabTasks.length; i++){
      if(tabTasks[i] == ancien){
        let finTabTasks = tabTasks.splice(i,1, inputValue);
      }
    }
    localStorage.setItem('tasks', tabTasks);
    div.replaceChild(newParag, div.firstChild);
    newParag.textContent = inputValue;
    statut = true;
  }
}



