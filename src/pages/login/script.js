const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessageLogin");

function login(){
    const userAttempt = users.find(user => user.username === username.value && user.password === password.value);
    if(userAttempt){
        user = userAttempt;
        displayPage("home");
    }else{
       errorMessage.style.display = "block";
    }
}
