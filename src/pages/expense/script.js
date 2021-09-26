const expenseDateElement = document.getElementById("expenseDate");

const expensePlaceInputElement = document.getElementById("expensePlaceInput");
const expensePlacesDataList =  document.getElementById("expensePlaces");

const expenseCategoryInputElement =  document.getElementById("expenseCategoryInput");
const expenseCategoriesDataList = document.getElementById("expenseCategories");

const expenseAmountInput = document.getElementById("expenseAmountInput");

const expensePaymentModeInput = document.getElementById("expensePaymentModeInput");
const expensePaymentModesDataList =  document.getElementById("expensePaymentModes");

function expenseCreateAndFillElements(){
    const categoriesList = user.categories.map(category => category.name)
    const expensePaymentModesList = user.paymentModes.map(paymentMode => paymentMode.name);

    fillList(user.places, expensePlacesDataList);
    fillList(categoriesList, expenseCategoriesDataList);
    fillList(expensePaymentModesList, expensePaymentModesDataList);

    setCurrentDateByDefault(expenseDateElement);
}


function saveExpenseData(){
    //if( !expenseAreThereMissingInputs() ) {
        const yearMonthValue = (expenseDateElement.value)
        const yearValue = yearMonthValue.substr(0,4)
        const monthValue = yearMonthValue.substr(6,7)
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
    
        expenseClearInputData();
   // }
}

function expenseClearInputData() {
    expensePlaceInputElement.value = "";
    expenseCategoryInputElement.value = "";
    expenseAmountInput.value = "";
    expensePaymentModeInput.value = "";
}

function expenseAreThereMissingInputs() {
    let areMissingFields = false;
    const expenseInputsRequired = [expenseCategoryInputElement, expenseAmountInput, expensePaymentModeInput];

    expenseInputsRequired.forEach(input => {
        validateRequiredInput(input);
    });
    
    areMissingFields = anyRequiredInputIsMissing(expenseInputsRequired);
    
    return areMissingFields;
}