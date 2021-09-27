let user;

function displayPage(pageId) {
    const header = document.getElementsByTagName("header")[0];
    hideSections();

    if(pageId === "login") {
        header.style.display = "none";
        document.getElementById(pageId).style.display = "grid";
    } else if(!!user) {
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
function createAndFillElements(pageId){
    
    const summarySection = document.getElementById('summarySection');
    const toDoListPendingsSection = document.getElementById('pendingExpenses');
    const doneListPendingsSection = document.getElementById('paidExpenses');
    const expensePlacesList = document.getElementById('expensePlaces');
    const incomeReasonsList = document.getElementById('incomeReasons');
    const transferenceOriginsList = document.getElementById('transferenceOrigins');

    switch(pageId) {

        case "login":
            loginClearInputData();

        case "home":

            if (summarySection.getElementsByTagName('div').length >= 1) {
                summarySection.innerHTML="";
            }
            // If items to do list are created, it means items done list too, so remove it to update it
            if (toDoListPendingsSection.getElementsByTagName("li").length >= 1) {
                toDoListPendingsSection.innerHTML="";
                doneListPendingsSection.innerHTML="";
            }

            homeCreateAndFillElements();

            break;
        
        case "expense":

            expenseClearInputData();

            // If places list hasn't options, it means all lists are empty, so fill all lists
            if (expensePlacesList.innerHTML === " ")  expenseCreateAndFillElements();

            break;
        
        case "income":

            incomeClearInputData();

            if (incomeReasonsList.innerHTML === " ") incomeCreateAndFillElements();

            break;
        
        case "transference":

            transferenceClearInputData()

            if(transferenceOriginsList.innerHTML === " ") transferenceCreateAndFillElements();
            
            break;
    }
}

function setCurrentDateByDefault(dateElement){
    const currentDate= new Date()
    const currentMonth=("0" + (currentDate.getMonth() + 1)).slice(-2)
    const year=currentDate.getFullYear()
    dateElement.value = `${year}-${currentMonth}`;
}

function fillList(listValues, listElement){

    listValues.forEach(value => {
        const option = document.createElement("option");
        listElement.appendChild(option);
        option.value = value;
    });
}

 // Find payment modes name that has property isDebit = true
function getUserDebitPaymentModes() {
    return (user.paymentModes.filter(paymentMode => paymentMode.isDebit) ).map(paymentMode => paymentMode.name);
}

// Returns true to know if the css class was assigned to the input
function validateRequiredInput(input) {
    if(input.value === "") {
        input.classList.add("errorInputRequired");
    }
} 

function anyRequiredInputIsMissing(requiredInputList) {
    return requiredInputList.some(input => input.classList.contains("errorInputRequired"));
}
