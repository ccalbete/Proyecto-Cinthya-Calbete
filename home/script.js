let fixedExpenses = [
    {
        name: "Booking",
        isPending: true
    },
    {
        name: "Credit card",
        isPending: true
    },
    {
        name: "University",
        isPending: false
    },
    {
        name: "English course",
        isPending: false
    },
    {
        name: "Gym",
        isPending: true
    },
    {
        name: "Internet",
        isPending: false
    }
]

let categories = [
    {
        name: "Food",
        spent: "15000"
    },
    {
        name: "Outings",
        spent: "2300"
    },
    {
        name: "Clothes",
        spent: "1600"
    },
    {
        name: "Transportation",
        spent: "500"
    },
    {
        name: "Cleaning",
        spent: "1800"
    },
    {
        name: "Pharmacy",
        spent: "600"
    }
]

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
    let listElements = document.getElementById("pendingsList");

    for(let i=0; i < fixedExpenses.length; i++){
        const listItem = document.createElement("li");
        const iconItem =  document.createElement("i");

        listElements.appendChild(listItem);
        listItem.appendChild(iconItem);
        listItem.textContent = fixedExpenses[i].name + " ";
        iconItem.className="far";
        iconItem.classList.toggle("fa-circle", fixedExpenses[i].isPending);
        iconItem.classList.toggle("fa-check-circle", !fixedExpenses[i].isPending);
        
    }
}

function fillSummarySection(){
    const BLUE = "blue";
    const SKYBLUE = "skyblue";
    let lastColor = SKYBLUE;
    const summarySection = document.getElementById("summarySection");
    
    for(let i=0; i < categories.length; i++){
        let categoryLabel = document.createElement("label");
        let spentElement = document.createElement("p");
        let categoryNameElement = document.createElement("p");
        summarySection.appendChild(categoryLabel)
        if(lastColor === SKYBLUE){
            categoryLabel.className = "backgroundBlue";
            lastColor = BLUE;
        }else{
            categoryLabel.className = "backgroundSkyblue";
            lastColor = SKYBLUE;
        }
        spentElement.textContent = "$"+categories[i].spent;
        spentElement.className = "spent";
        categoryLabel.appendChild(spentElement);
        categoryNameElement.textContent = categories[i].name;
        categoryLabel.appendChild(categoryNameElement)

    }
}

function showTitleCurrentMonth(){
    const titleElement = document.getElementById("title")
    const currentDate = new Date()
    titleElement.textContent = months[currentDate.getMonth()] + " " +currentDate.getFullYear()
}