const transferenceDateElement = document.getElementById("transferenceDate");

const transferenceOriginInput = document.getElementById("transferenceOriginInput");
const transferenceOriginsDataList = document.getElementById("transferenceOrigins");

const transferenceAmountInput = document.getElementById("transferenceAmountInput")

const transferenceDestintationInput = document.getElementById("transferenceDestintationInput");
const transferenceDestinationsDataList = document.getElementById("transferenceDestinations");

function transferenceCreateAndFillElements(){
    //Find payment modes name that has property isDebit = true
    const transferencePaymentModesList = ( user.paymentModes.filter(paymentMode => paymentMode.isDebit) ).map(paymentMode => paymentMode.name);

    fillList(transferencePaymentModesList, transferenceOriginsDataList);
    fillList(transferencePaymentModesList, transferenceDestinationsDataList);

    setCurrentDateByDefault(transferenceDateElement);
}

function saveTransferenceData(){
    const selectedOrigin = transferenceOriginInput.value;
    const transferenceEnteredAmount = transferenceAmountInput.value;
    const selectedDestination = transferenceDestintationInput.value;

    user.paymentModes.find(paymentMode => paymentMode.name === selectedOrigin).available -= transferenceEnteredAmount;
    user.paymentModes.find(paymentMode => paymentMode.name === selectedDestination).available += transferenceEnteredAmount;

    //Save transference history 
    user.transferences.push(
        {
          origin: selectedOrigin,
          amount: transferenceEnteredAmount,
          paymentMode: selectedDestination,
        }
    )  
    
    // Clear data in screen
    transferenceOriginInput.value="";
    transferenceAmountInput.value="";
    transferenceDestintationInput.value="";
}