const incomeForm = document.getElementById("incomeForm");

const incomeDateElement = document.getElementById("incomeDate");

const incomeReasonsInput = document.getElementById("incomeReasonInput");
const incomeReasonsDataList = document.getElementById("incomeReasons");

const incomeAmountInput = document.getElementById("incomeAmountInput");

const incomePaymentModeInput = document.getElementById("incomePaymentModeInput");
const incomePaymentModesDataList = document.getElementById("incomePaymentModes");


function incomeCreateAndFillElements() {

    getUserDebitPaymentModes().then(incomePaymentModesList => {
        fillList(incomePaymentModesList, incomePaymentModesDataList);
    });

    getUserReasons().then(incomeReasonsList => {
        fillList(incomeReasonsList, incomeReasonsDataList);
    });

    setCurrentDateByDefault(incomeDateElement);
}

function saveIncomeData() {

    fetch(url + "/incomes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
            "date": incomeDateElement.value,
            "reason": incomeReasonsInput.value,
            "amount": parseInt(incomeAmountInput.value),
            "paymentMode": incomePaymentModeInput.value
        })
    }).then();
    resetForm(incomeForm, incomeDateElement);
}
