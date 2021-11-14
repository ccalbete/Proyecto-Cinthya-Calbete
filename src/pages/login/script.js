const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessageLogin");


function login() {
    fetch(url + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username.value,
            "password": password.value,
        })
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        if (response.success) {
            localStorage.setItem("token", response.token);
            user = response.userId;
            displayPage("home");
        } else {
            errorMessage.style.display = "block";
        }
    })
};

function loginClearInputData() {
    username.value = "";
    password.value = "";
    errorMessage.style.display = "none";
}
