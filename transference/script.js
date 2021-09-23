
let originPaymentmodesListElement = document.getElementById("origin")
let amountElement = document.getElementById("amount")
let destinationPaymentmodesListElement = document.getElementById("destination")
let saveButtonElement = document.getElementById("saveButton")
let originPaymentModeInput = document.getElementById("paymentModeOriginInput");
let destinationPaymentModeInput = document.getElementById("paymentModeDestintationInput");
let amountInput = document.getElementById("amountInput");


let paymentModes = [
    {   name: "Cash",
        available: 300
    },
    {
        name: "BROU debit card",
        available: 400
    },
    {
        name: "Santader debit card",
        available: 600
    },
    {
        name: "Food card",
        available: 100
    }
]

function fillListsValues(){
    fillList(paymentModes, originPaymentmodesListElement);
    fillList(paymentModes, destinationPaymentmodesListElement);
}



function fillList(listValues, listElement){
    for(let i=0; i < listValues.length; i++){
        let option = document.createElement("option");
        listElement.appendChild(option);
        option.value = listValues[i].name;
    }
}

function saveData(){
    let selectedOrigin = originPaymentModeInput.value
    let selectedDestination = destinationPaymentModeInput.value
    let indexOrigin = searchPayementModeIndex(selectedOrigin)
    let indexDestination = searchPayementModeIndex(selectedDestination)

    /**Take current available from each payment mode and substract (to origin) and plus (to destination) the amount entered */
    paymentModes[indexOrigin].available = paymentModes[indexOrigin].available - amountInput.value
    paymentModes[indexDestination].available = paymentModes[indexDestination].available + amountInput.value

}

function searchPayementModeIndex(paymentModeName){
   for(let i=0; i<paymentModes.length; i++){
       if(paymentModes[i].name == paymentModeName) return i
   }
}