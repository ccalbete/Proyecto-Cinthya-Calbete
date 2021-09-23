let reasons = [
    "Salary",
    "Leftover last month",
    "Present"
]

let paymentModes = [
    "Cash",
    "BROU debit card",
    "Santader debit card",
    "Santander credit card",
    "Itau credit card",
    "Food card",
]

let reasonListElement = document.getElementById("reasons")
let amountElement = document.getElementById("amount")
let paymentmodeListElement = document.getElementById("paymentModes")
let saveButtonElement = document.getElementById("saveButton")



function fillListsValues(){
    fillList(reasons, reasonListElement);
    fillList(paymentModes, paymentmodeListElement);
}


function fillList(listValues, listElement){
    for(let i=0; i < listValues.length; i++){
        let option = document.createElement("option");
        listElement.appendChild(option);
        option.value = listValues[i];
    }
}