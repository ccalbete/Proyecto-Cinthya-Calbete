const transferenceDateElement = document.getElementById("transferenceDate");

const transferenceOriginInput = document.getElementById("transferenceOriginInput");
const transferenceOriginsDataList = document.getElementById("transferenceOrigins");

const transferenceAmountInput = document.getElementById("transferenceAmountInput")

const transferenceDestintationInput = document.getElementById("transferenceDestintationInput");
const transferenceDestinationsDataList = document.getElementById("transferenceDestinations");

function transferenceCreateAndFillElements(){
    const transferencePaymentModesList = getUserDebitPaymentModes()

    fillList(transferencePaymentModesList, transferenceOriginsDataList);
    fillList(transferencePaymentModesList, transferenceDestinationsDataList);

    setCurrentDateByDefault(transferenceDateElement);
}

function saveTransferenceData(){
    const selectedOrigin = transferenceOriginInput.value;
    const transferenceEnteredAmount = parseInt(transferenceAmountInput.value);
    const selectedDestination = transferenceDestintationInput.value;

    user.paymentModes.find(paymentMode => paymentMode.name === selectedOrigin).available -= transferenceEnteredAmount;
    user.paymentModes.find(paymentMode => paymentMode.name === selectedDestination).available += transferenceEnteredAmount;

    console.log("origin " + user.paymentModes.find(paymentMode => paymentMode.name === selectedOrigin).available);
    console.log("destination "+user.paymentModes.find(paymentMode => paymentMode.name === selectedDestination).available)

    //Save transference history 
    user.transferences.push(
        {
          origin: selectedOrigin,
          amount: transferenceEnteredAmount,
          destination: selectedDestination,
        }
    )  
    
    transferenceClearInputData();
}

function transferenceClearInputData() {
    transferenceOriginInput.value="";
    transferenceAmountInput.value="";
    transferenceDestintationInput.value="";
}