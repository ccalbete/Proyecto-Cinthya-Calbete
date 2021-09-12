
const monthElement = document.querySelector('input[type="month"]');
const placesListElement =  document.getElementById("places");
const categoriesListElement =  document.getElementById("categories");
const paymentModesListElement =  document.getElementById("paymentModes");
const fixedExpensesListElement = document.getElementById("isFixedExpense");

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
    fillList(fixedExpenses, fixedExpensesListElement)
}

function fillList(listValues, listElement){
    for(let i=0; i < listValues.length; i++){
        let option = document.createElement("option");
        listElement.appendChild(option);
        option.value = listValues[i];
    }
}
