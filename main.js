//Exercice 24 DOM :
//En vous inspirant de l'exemple ci-dessus :
//Partie HTML :
//-un titre h1 = liste des tâches,
//-un input de type text (id= task),
//-un bouton (id = add, onclick = addTask()) texte Ajouter,
//-un bouton (id = delAllTask, onclick = delAllTask()) texte Tout Supprimer,
//-un bouton (id = reload, onclick = reload()) texte Recharger la page,
//-une div (id = tasks)

//Partie JS :
//-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),:
//-Récupérer la div (tasks)
//Récupérer la valeur de l'input (id task),
//-Créer un paragraphe,
//Ajouter la valeur de l'input (id task)  au paragraphe,
//Ajouter le paragraphe à la div (id = tasks)
//-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
//-Créer une fonction reload qui va à chaque clic sur le bouton recharger la page.

function addTask(){
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
}

function reload(){
  location.reload();
}

function deleteTask(task){
  task.parentNode.remove();
}

function updateTask(task){
  task.parentNode.firstChild.textContent = document.getElementById("task").value;
}

//Bonus :
//-Dans la fonction addTask (remplacer le code précédent) :
//A chaque clic sur la fonction : 
//      -ajouter une div (class = container),
//          -> à l'intérieur de la div pour aller ajouter un paragraphe,
//          -> récupérer le contenu de l'input texte (task) et passer la valeur au paragraphe,
//          -> ajouter un bouton (id = delete, onclick = deleteTask(this),
//          -> ajouter un bouton (id = update, onclick = updateTask(this),
//          ->Ajouter une fonction deleteTask qui va :
//             Supprimer la tache sélectionnée,
//          -Ajouter une fonction updateTask qui va :
//            Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)
//NB : on à besoin d'utiliser la création d'élément (createElement() et appendChild())