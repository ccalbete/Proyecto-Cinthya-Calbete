const monthElement = document.querySelector('input[type="month"]');

const expensePlaceInputElement = document.getElementById("expensePlaceInput");
const expensePlacesDataList =  document.getElementById("expensePlaces");

const expenseCategoryInputElement =  document.getElementById("expenseCategoryInput");
const expenseCategoriesDataList = document.getElementById("expenseCategories");

const expenseAmountInput = document.getElementById("expenseAmountInput");

const expensePaymentModeInput = document.getElementById("expensePaymentModeInput");
const expensePaymentModesDataList =  document.getElementById("expensePaymentModes");



function setCurrentDateByDefault(){
    const currentDate= new Date()
    const currentMonth=("0" + (currentDate.getMonth() + 1)).slice(-2)
    const year=currentDate.getFullYear()
    monthElement.value = `${year}-${currentMonth}`;
}

function expenseFillListsValues(){
    const categoriesList = user.categories.map(category => category.name)
    const expensePaymentModesList = user.paymentModes.map(paymentMode => paymentMode.name);

    fillList(user.places, expensePlacesDataList);
    fillList(categoriesList, expenseCategoriesDataList);
    fillList(expensePaymentModesList, expensePaymentModesDataList);
}


function saveExpenseData(){
    const yearMonthValue = (monthElement.value)
    const yearValue = yearMonthValue.substr(0,4)
    const monthValue = yearMonthValue.substr(6,7)
    const placeValue = expensePlaceInputElement.value;
    const categoryValue = expenseCategoryInputElement.value;
    const amountValue = parseInt(expenseAmountInput.value);
    const paymentModeValue = expensePaymentModeInput.value;

    
    // Update property spent of selected category
    user.categories.forEach(category => {
        if(category.name === categoryValue){
            category.spent += amountValue;
            return;
        }
    });

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
    
    // Clear data in screen
    expensePlaceInputElement.value = "";
    expenseCategoryInputElement.value = "";
    expenseAmountInput.value = "";
    expensePaymentModeInput.value = "";
}

