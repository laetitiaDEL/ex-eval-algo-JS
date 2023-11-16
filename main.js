const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

const tabData = [];
tabData.push(usersHuman, usersPet, usersXeno);

function afficherHumain(obj){
    let affichage = "--------------- \n nom : "+obj.name+"\n email : "+obj.email+"\n age : "+obj.age+"\n---------------";
    console.log(affichage);
}

function afficherAnimal(obj){
    let affichage = "--------------- \n nom : "+obj.name+"\n espece : "+obj.espece+"\n age : "+obj.age+"\n propriétaire : "+obj.propriétaire+"\n---------------";
    console.log(affichage);
}

function afficherXeno(obj){
    let affichage = "--------------- \n nom : "+obj.name+"\n espece : "+obj.espece+"\n age : "+obj.age+"\n niveau de menace : "+obj.menace+"\n---------------";
    console.log(affichage);
}

function profil(t){
    t.forEach(e => {
        if(e.type == "humain"){
            afficherHumain(e);
        }else if(e.type == "animal de compagnie"){
            afficherAnimal(e);
        }else if(e.type == "Xeno"){
            afficherXeno(e);
        }else{
            console.log("Type de Profil non Existant");
        }
    });
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);

function profilAll(t){
    t.forEach(t => {
        profil(t);
    });
}

profilAll(tabData);