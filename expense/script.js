
const monthElement = document.querySelector('input[type="month"]');
const placesListElement =  document.getElementById("places");
const placeInput = document.getElementById("placeInput");
const categoriesListElement =  document.getElementById("categories");
const categoryInput = document.getElementById("categoryInput");
const amountInput = document.getElementById("amountInput");
const paymentModesListElement =  document.getElementById("paymentModes");
const paymentModeInput = document.getElementById("paymentModeInput");
const fixedExpensesListElement = document.getElementById("isFixedExpense");
const isFixedExpenseInput = document.getElementById("isFixedExpenseInput");
const saveButtonElement = document.getElementById("saveButton");

let places = [
    "Mercado libre",
    "Supermarket Frog",
    "Supermarket Disco",
    "Pharmacy Farmashop",
    "Pharmacy San Roque",
    "University ORT",
    "Abitab",
]

let categories = [
    "Food",
    "Outings",
    "Clothes",
    "Transportation",
    "Cleaning",
    "Pharmacy"
]

let paymentModes = [
    "Cash",
    "BROU debit card",
    "Santader debit card",
    "Santander credit card",
    "Itau credit card",
    "Food card",
]

let fixedExpenses = [
    "Booking",
    "Credit card",
    "University",
    "English course",
]

let expenses = [];

function setCurrentDateByDefault(){
    const currentDate= new Date()
    const currentMonth=("0" + (currentDate.getMonth() + 1)).slice(-2)
    const year=currentDate.getFullYear()
    monthElement.value = `${year}-${currentMonth}`;
}

function fillListsValues(){
    fillList(places, placesListElement);
    fillList(categories, categoriesListElement);
    fillList(paymentModes, paymentModesListElement);
    fillList(fixedExpenses, fixedExpensesListElement);
}

function fillList(listValues, listElement){
    for(let i=0; i < listValues.length; i++){
        let option = document.createElement("option");
        listElement.appendChild(option);
        option.value = listValues[i];
    }
}



saveButtonElement.addEventListener("click", saveData);

function saveData(){
    const yearMonthValue = (monthElement.value)
    const yearValue = yearMonthValue.substr(0,4)
    const monthValue = yearMonthValue.substr(6,7)
    const placeValue = placeInput.value;
    const categoryValue = categoryInput.value;
    const amountValue = amountInput.value;
    const paymentModeValue = paymentModeInput.value;
    const fixedExpenseValue = isFixedExpenseInput.value;
    expenses.push(
            {
              year: yearValue,
              month: monthValue,
              place: placeValue,
              category: categoryValue,
              amount: amountValue,
              paymentMode: paymentModeValue,
              fixedExpense: isFixedExpenseValue  
        }
    )  
}

