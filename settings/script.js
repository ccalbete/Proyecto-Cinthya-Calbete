let categories = [
    "Food",
    "Outings",
    "Clothes",
    "Transportation",
    "Cleaning",
    "Pharmacy"
]

let categoriesSection = document.getElementById("categoriesSection");
let fixedExpensesSection = document.getElementById("fixedExpensesSection");
let placesSection = document.getElementById("placesSection");
let paymentModesSection = document.getElementById("paymentModesSection");
let incomeReasonsSection = document.getElementById("incomeReasonsSection");

function fillSectionsData(){
    createAccordeonSection(categories, categoriesSection, "Categories")
}

/**
    mainSection contains 2 labels, sectionTitle and sectionContent.
    sectionTitle contains an <img> for the arrow icon and a span for the accordeon title.
    sectionContent contains a label for each item. Each label contains a span for the item name and 2 buttons, to edit and remove the item.
 */

function createAccordeonSection(itemsList, mainSection, accordeonTitleText){
    let sectionTitle = document.createElement("label");
    sectionTitle.className = "sectionTitle";
    mainSection.appendChild(sectionTitle);

    createHeaderAccordeon(accordeonTitleText, sectionTitle);

    let sectionContent = document.createElement("label");
    sectionContent.className = "sectionContent";
    mainSection.appendChild(sectionContent);

    for(let i=0; i<itemsList.length; i++){
        let itemContent = document.createElement("label");
        itemContent.className = "itemContent";
        sectionContent.appendChild(itemContent);

        let itemName = document.createElement("span");
        itemName.textContent = itemsList[i];
        itemContent.appendChild(itemName);

        let editButton = createButtonWithIcon("editButton", "iconButton", "./../images/editButton.png")
        itemContent.appendChild(editButton);

        let removeButton =  createButtonWithIcon("removeButton", "iconButton", "./../images/removeButton.png")
        itemContent.appendChild(removeButton);
    }

}

function createHeaderAccordeon(accordeonTitleText, sectionTitleElement){
    let arrowButton = createButtonWithIcon("", "arrow", "./../images/arrow.png");
    arrowButton.addEventListener("click", rotateArrow);

    let title = document.createElement("span");
    title.textContent = accordeonTitleText;

    sectionTitleElement.appendChild(arrowButton);
    sectionTitleElement.appendChild(title);
}

/**
 * 
 * @param {*} buttonClass css class for the new button
 * @param {*} iconPath route of the icon image
 */

function createButtonWithIcon(buttonClass, iconClass, iconPath){
    let button = document.createElement("button");
    button.className = buttonClass;

    let iconButton = document.createElement("img");
    iconButton.src = iconPath;
    iconButton.className = iconClass;
    button.appendChild(iconButton);

    return button;
}

function rotateArrow(){
    let arrow = document.getElementsByClassName("arrow");
    if(arrow.style.webkitTransform == "rotate(0)"){
        arrow.style.webkitTransform == "rotate(100deg)";
    }else{
        arrow.style.webkitTransform == "rotate(0)";
    }
}
