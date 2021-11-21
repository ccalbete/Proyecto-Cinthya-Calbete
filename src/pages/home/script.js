
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

    getUserFixedExpensesCategories().then((userFixedExpenses) => {
        userFixedExpenses.forEach(fixedExpense => {
            const listItem = document.createElement("li");
            listItem.textContent = fixedExpense.name;
            if (fixedExpense.spent > 0) {
                paidExpensesElement.appendChild(listItem);
            } else {
                pendingExpensesElement.appendChild(listItem);
            }
        });
    }).catch(error => console.error('Error: ', error))
}

function fillSummarySection() {
    const BLUE = "blue";
    const SKYBLUE = "skyblue";
    let lastColor = SKYBLUE;

    getUserNotFixedExpensesCategories().then((userCategories) => {
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
    }).catch(error => console.error('Error: ', error))


}

function showTitleCurrentMonth() {
    const currentDate = new Date()
    titleDateElement.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear()
}

