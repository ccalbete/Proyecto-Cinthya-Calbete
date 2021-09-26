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

    checkIfElementsPageWasAlreadyCreated(pageId);
}

function checkIfElementsPageWasAlreadyCreated(pageId){

    switch(pageId) {
        case "home":
            showTitleCurrentMonth();
           if ( !document.getElementById('summarySection').getElementsByTagName('div').length >= 1) {
                fillPendingsList();
                fillSummarySection();
                break;
           }
        
        case "expense":
            setCurrentDateByDefault(); 
            if( !document.getElementById('expensePlaces').getElementsByTagName('options').length >= 1) {
                expenseFillListsValues();
                break;
            }
        case "income":
            if( !document.getElementById('incomeReasons').getElementsByTagName('options').length >= 1) {
                incomeFillListsValues();
                break;
            }
        case "transference":
        if( !document.getElementById('transferenceOrigins').getElementsByTagName('options').length >= 1) {
            transferenceFillListsValues();
            break;
        }
    }
}

function hideSections() {
    const sections = ["login", "home", "expense", "income", "transference", "oldMonths"];

    sections.forEach(section => {
        document.getElementById(section).style.display = "none";
    });
}

function fillList(listValues, listElement){

    listValues.forEach(value => {
        const option = document.createElement("option");
        listElement.appendChild(option);
        option.value = value;
    });
}