
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

categories= [
    {
        name: "Food",
        isFixed: false,
        spent: 300
    },
    {
        name: "Outings",
        isFixed: false,
        spent: 500
    },
    {
        name: "Clothes",
        isFixed: false,
        spent: 600
    },
    {
        name: "Transportation",
        isFixed: false,
        spent: 900
    },
    {
        name: "Cleaning",
        isFixed: false,
        spent: 700
    },
    {
        name: "Pharmacy",
        isFixed: false,
        spent: 840
    },
    {
        name: "Booking",
        isFixed: true,
        spent: 0
    },
    {
        name: "Credit card",
        isFixed: true,
        spent: 44
    },
    {
        name: "University",
        isFixed: true,
        spent: 0
    },
    {
        name: "English course",
        isFixed: true,
        spent: 444
    },
    {
        name: "Gym",
        isFixed: true,
        spent: 232
    },
    {
        name: "Internet",
        isFixed: true,
        spent: 62
    }
]

function fillPendingsList(){

    for(let i=0; i < categories.length; i++){

        if(categories[i].isFixed) {
            const listItem = document.createElement("li");
            listItem.textContent = categories[i].name;
            if(categories[i].spent > 0) {
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
    const categoriesToShow = categories.filter(category => !category.isFixed);

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