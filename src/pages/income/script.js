const incomeDateElement = document.getElementById("incomeDate");

const incomeReasonsInput = document.getElementById("incomeReasonInput");
const incomeReasonsDataList = document.getElementById("incomeReasons");

const incomeAmountInput = document.getElementById("incomeAmountInput");

const incomePaymentModeInput = document.getElementById("incomePaymentModeInput");
const incomePaymentModesDataList = document.getElementById("incomePaymentModes");


function incomeCreateAndFillElements(){
    //Find payment modes name that has property isDebit = true
    const incomepaymentModesList = ( user.paymentModes.filter(paymentMode => paymentMode.isDebit) ).map(paymentMode => paymentMode.name);

    fillList(user.reasons, incomeReasonsDataList);
    fillList(incomepaymentModesList, incomePaymentModesDataList);

    setCurrentDateByDefault(incomeDateElement);
}

function saveIncomeData(){
    const yearMonthValue = (incomeDateElement.value)
    const yearValue = yearMonthValue.substr(0,4)
    const monthValue = yearMonthValue.substr(6,7)
    const incomeSelectedPaymentMode = incomePaymentModeInput.value;
    const incomeEnteredAmount = parseInt(incomeAmountInput.value);

    // Find selected user payment mode and add entered amount 
    user.paymentModes.find(paymentMode => paymentMode.name === incomeSelectedPaymentMode).available += incomeEnteredAmount;

    //Save income history 
    user.incomes.push(
        {
            year: yearValue,
            month: monthValue,
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

