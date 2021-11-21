const expenseForm = document.getElementById("expenseForm");

const expenseDateElement = document.getElementById("expenseDate");

const expensePlaceInputElement = document.getElementById("expensePlaceInput");
const expensePlacesDataList = document.getElementById("expensePlaces");

const expenseCategoryInputElement = document.getElementById("expenseCategoryInput");
const expenseCategoriesDataList = document.getElementById("expenseCategories");

const expenseAmountInput = document.getElementById("expenseAmountInput");

const expensePaymentModeInput = document.getElementById("expensePaymentModeInput");
const expensePaymentModesDataList = document.getElementById("expensePaymentModes");

function expenseCreateAndFillElements() {

    getUserPlaces().then((expensePlacesList) => {
        fillList(expensePlacesList, expensePlacesDataList);
    });

    getUserCategories().then((expenseCategoriesList) => {
        fillList(expenseCategoriesList, expenseCategoriesDataList);
    });

    getUserPaymentModes().then((expensePaymentModesList) => {
        fillList(expensePaymentModesList, expensePaymentModesDataList);
    });

    setCurrentDateByDefault(expenseDateElement);
}


function saveExpenseData() {

    fetch(url + "/expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
            "date": expenseDateElement.value,
            "place": expensePlaceInputElement.value,
            "category": expenseCategoryInputElement.value,
            "amount": parseInt(expenseAmountInput.value),
            "paymentMode": expensePaymentModeInput.value
        })
    }).then().catch(error => console.error('Error: ', error))

    resetForm(expenseForm, expenseDateElement);
}