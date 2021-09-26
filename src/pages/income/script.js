const incomeReasonsInput = document.getElementById("incomeReasonInput");
const incomeReasonsDataList = document.getElementById("incomeReasons");

const incomeAmountInput = document.getElementById("incomeAmountInput");

const incomePaymentModeInput = document.getElementById("incomePaymentModeInput");
const incomePaymentModesDataList = document.getElementById("incomePaymentModes");


function incomeFillListsValues(){
    //Find payment modes name that has property isDebit = true
    const incomepaymentModesList = ( user.paymentModes.filter(paymentMode => paymentMode.isDebit) ).map(paymentMode => paymentMode.name);

    fillList(user.reasons, incomeReasonsDataList);
    fillList(incomepaymentModesList, incomePaymentModesDataList);
}

function saveIncomeData(){
    const incomeSelectedPaymentMode = incomePaymentModeInput.value;
    const incomeEnteredAmount = parseInt(incomeAmountInput.value);

    // Find selected user payment mode and add entered amount 
    user.paymentModes.find(paymentMode => paymentMode.name === incomeSelectedPaymentMode).available += incomeEnteredAmount;

    //Save income history 
    user.incomes.push(
        {
          reason: incomeReasonsInput.value,
          amount: incomeEnteredAmount,
          paymentMode: incomeSelectedPaymentMode,
        }
    )  

    // Clear data in screen
    incomeReasonsInput.value="";
    incomeAmountInput.value="";
    incomePaymentModeInput.value="";
}

