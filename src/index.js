let user;

function displayPage(pageId) {
    const header = document.getElementsByTagName("header")[0];
    hideSections();

    if (pageId === "login") {
        header.style.display = "none";
        document.getElementById(pageId).style.display = "grid";
    } else if (!!user) {
        header.style.display = "block";
        document.getElementById(pageId).style.display = "grid";
    } else {
        displayPage("login");
    }
    createAndFillElements(pageId);
}


function hideSections() {
    const sections = ["login", "home", "expense", "income", "transference"];

    sections.forEach(section => {
        document.getElementById(section).style.display = "none";
    });
}

// Checks if elements page were created before creating it, to avoid duplicate data
function createAndFillElements(pageId) {

    const summarySection = document.getElementById('summarySection');
    const toDoListPendingsSection = document.getElementById('pendingExpenses');
    const doneListPendingsSection = document.getElementById('paidExpenses');
    const expensePlacesList = document.getElementById('expensePlaces');
    const incomeReasonsList = document.getElementById('incomeReasons');
    const transferenceOriginsList = document.getElementById('transferenceOrigins');

    switch (pageId) {

        case "login":
            loginClearInputData();

        case "home":

            if (summarySection.getElementsByTagName('div').length >= 1) {
                summarySection.innerHTML = "";
            }
            // If items to do list are created, it means items done list too, so remove it to update it
            if (toDoListPendingsSection.getElementsByTagName("li").length >= 1) {
                toDoListPendingsSection.innerHTML = "";
                doneListPendingsSection.innerHTML = "";
            }

            homeCreateAndFillElements();

            break;

        case "expense":

            resetForm(expenseForm, expenseDateElement);

            // If places list hasn't options, it means all lists are empty, so fill all lists
            if (expensePlacesList.innerHTML === " ") expenseCreateAndFillElements();

            break;

        case "income":

            resetForm(incomeForm, incomeDateElement);

            if (incomeReasonsList.innerHTML === " ") incomeCreateAndFillElements();

            break;

        case "transference":

            resetForm(transferenceForm, transferenceDateElement);

            if (transferenceOriginsList.innerHTML === " ") transferenceCreateAndFillElements();

            break;
    }
}

// All the inputs of the form passed by parameter are emptied, but the date is not left empty
function resetForm(formElement, dateElement) {
    formElement.reset();
    setCurrentDateByDefault(dateElement);
}

function setCurrentDateByDefault(dateElement) {
    const currentDate = new Date()
    const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2)
    const year = currentDate.getFullYear()
    dateElement.value = `${year}-${currentMonth}`;
}

function fillList(listValues, listElement) {

    listValues.forEach(value => {
        const option = document.createElement("option");
        listElement.appendChild(option);
        option.value = value.name;
    });
}

function getUserPaymentModes() {
    return fetch(url + "/paymentModes/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userPaymentModes;
    }).catch(error => console.error('Error: ', error));
}

// Returns a promise with the user's list of payment modes
function getUserDebitPaymentModes() {
    return fetch(url + "/paymentModes/" + user + "/debit", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.debitPaymentModes;
    }).catch(error => console.error('Error: ', error));
};

function getUserReasons() {
    return fetch(url + "/reasons/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userReasons;
    }).catch(error => console.error('Error: ', error));
};

function getUserCategories() {

    return fetch(url + "/categories/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userCategories;
    }).catch(error => console.error('Error: ', error));
}

function getUserFixedExpensesCategories() {
    return fetch(url + "/categories/" + user + "/fixedExpenses", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userFixedExpensesCategories;
    }).catch(error => console.error('Error: ', error));
}

function getUserNotFixedExpensesCategories() {
    return fetch(url + "/categories/" + user + "/notFixedExpenses", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userNotFixedExpensesCategories;
    }).catch(error => console.error('Error: ', error));
}

function getUserPlaces() {
    return fetch(url + "/places/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userPlaces;
    }).catch(error => console.error('Error: ', error));
}