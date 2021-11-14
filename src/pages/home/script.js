
const pendingExpensesElement = document.getElementById("pendingExpenses");
const paidExpensesElement = document.getElementById("paidExpenses");
const summarySectionElement = document.getElementById("summarySection");
const titleDateElement = document.getElementById("titleDate")
const menuContainer = document.getElementById("menuContainer")

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function homeCreateAndFillElements() {
    showTitleCurrentMonth();
    fillPendingsList();
    fillSummarySection();

}


function fillPendingsList() {

    getFixedExpensesByUser().then((userFixedExpenses) => {
        userFixedExpenses.forEach(fixedExpense => {
            const listItem = document.createElement("li");
            listItem.textContent = fixedExpense.name;
            if (fixedExpense.spent > 0) {
                paidExpensesElement.appendChild(listItem);
            } else {
                pendingExpensesElement.appendChild(listItem);
            }
        });
    })
}

function fillSummarySection() {
    const BLUE = "blue";
    const SKYBLUE = "skyblue";
    let lastColor = SKYBLUE;

    getCategoriesByUser().then((userCategories) => {
        for (let i = 0; i < userCategories.length; i++) {

            let categoryItemsGrouper = document.createElement("div");
            let spentElement = document.createElement("p");
            let categoryNameElement = document.createElement("p");
            summarySectionElement.appendChild(categoryItemsGrouper)

            if (lastColor === SKYBLUE) {
                categoryItemsGrouper.className = "backgroundBlue";
                lastColor = BLUE;
            } else {
                categoryItemsGrouper.className = "backgroundSkyblue";
                lastColor = SKYBLUE;
            }
            spentElement.textContent = "$" + userCategories[i].spent;
            spentElement.className = "spent";
            categoryItemsGrouper.appendChild(spentElement);
            categoryNameElement.textContent = userCategories[i].name;
            categoryItemsGrouper.appendChild(categoryNameElement)

        }
    })


}

function showTitleCurrentMonth() {
    const currentDate = new Date()
    titleDateElement.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear()
}

function getCategoriesByUser() {
    return fetch(url + "/categories/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userCategories;
    })
}

function getFixedExpensesByUser() {
    return fetch(url + "/fixedExpenses/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response.userFixedExpenses;
    })
}