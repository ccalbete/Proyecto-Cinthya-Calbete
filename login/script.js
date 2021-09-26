const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmButton = document.getElementById("confirmButton")
let users



function getUsers(){
    fetch("./../utils/users.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        users = data;
    })
}

function credentialsValidation(){
    let exists = false;

   for(let i=0; i < users.length; i++){
        if(users[i].username == username.value){
            if(users[i].password == password.value) {
                exists = true;
                break;
            }
        }
    } 
    if(!exists) alert("Username or password is incorrect") 
    return exists;
}

