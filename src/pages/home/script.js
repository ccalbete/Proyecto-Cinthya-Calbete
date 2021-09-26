
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

function fillPendingsList(){

    for(let i=0; i < user.categories.length; i++){

        if(user.categories[i].isFixed) {
            const listItem = document.createElement("li");
            listItem.textContent = user.categories[i].name;
            if(user.categories[i].spent > 0) {
                paidExpensesElement.appendChild(listItem);
            } else {
                pendingExpensesElement.appendChild(listItem);
            }
        }
        
        
    }
}

function fillSummarySection() {
    const BLUE = "blue";
    const SKYBLUE = "skyblue";
    let lastColor = SKYBLUE;
    const categoriesToShow = user.categories.filter(category => !category.isFixed);

    for(let i=0; i < categoriesToShow.length; i++) {

        let categoryItemsGrouper = document.createElement("div");
        let spentElement = document.createElement("p");
        let categoryNameElement = document.createElement("p");
        summarySectionElement.appendChild(categoryItemsGrouper)

        if(lastColor === SKYBLUE) {
            categoryItemsGrouper.className = "backgroundBlue";
            lastColor = BLUE;
        } else {
            categoryItemsGrouper.className = "backgroundSkyblue";
            lastColor = SKYBLUE;
        }
        spentElement.textContent = "$"+categoriesToShow[i].spent;
        spentElement.className = "spent";
        categoryItemsGrouper.appendChild(spentElement);
        categoryNameElement.textContent = categoriesToShow[i].name;
        categoryItemsGrouper.appendChild(categoryNameElement)

    }
}

function showTitleCurrentMonth(){
    const currentDate = new Date()
    titleDateElement.textContent = months[currentDate.getMonth()] + " " +currentDate.getFullYear()
}