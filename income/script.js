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