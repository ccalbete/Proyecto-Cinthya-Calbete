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
    
    transferenceClearInputData();
}

function transferenceClearInputData() {
    transferenceOriginInput.value="";
    transferenceAmountInput.value="";
    transferenceDestintationInput.value="";
}