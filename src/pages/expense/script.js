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
    })

    getUserCategoriesNames().then((expenseCategoriesList) => {
        fillList(expenseCategoriesList, expenseCategoriesDataList);
    })

    getUserDebitPaymentModesNames().then((expensePaymentModesList) => {
        fillList(expensePaymentModesList, expensePaymentModesDataList);
    })
    setCurrentDateByDefault(expenseDateElement);
}


function saveExpenseData() {
    const yearMonthValue = (expenseDateElement.value)
    const yearValue = yearMonthValue.substr(0, 4)
    const monthValue = yearMonthValue.substr(6, 7)
    const placeValue = expensePlaceInputElement.value;
    const categoryValue = expenseCategoryInputElement.value;
    const amountValue = parseInt(expenseAmountInput.value);
    const paymentModeValue = expensePaymentModeInput.value;


    // Update property spent of selected category
    const expenseSelectedCategory = user.categories.find(category => category.name === categoryValue);
    expenseSelectedCategory.spent += amountValue;

    //Add expense history
    user.expenses.push(
        {
            year: yearValue,
            month: monthValue,
            place: placeValue,
            category: categoryValue,
            amount: amountValue,
            paymentMode: paymentModeValue
        }
    )

    resetForm(expenseForm, expenseDateElement);
}