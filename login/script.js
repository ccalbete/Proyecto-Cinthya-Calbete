const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmButton = document.getElementById("confirmButton")
let users = [
    {  
        username: "Pepe",
        password: "pepe01" 
    },
    {
        username: "Antonio",
        password: "Mypassword123"
    },
    {
        username: "Felipe10",
        password: "123pass123"
    }
]


function credentialsValidation(){
    let exists = false;
    let lastUser = users.length-1
    
    console.log(username)
    for(let i=0; i < users.length; i++){
        if(users[i].username === username.value){
            if(users[i].password === password.value) {
                exists = true;
            }
        }
        // if(i == lastUser && !exists) alert("Usuario o contraseña incorrectos")
    }

    
}

confirmButton.addEventListener("click", credentialsValidation())