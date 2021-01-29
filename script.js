//to increase Input value
function increase(numberOfTicket){
    numberOfTicket++;
    return numberOfTicket;
}



//to decrease Input value
function decrease(numberOfTicket){
    //Prevent the value become negative because, Number of Ticket never be a negative value
    if(numberOfTicket > 0){
        numberOfTicket--;
    }
    return numberOfTicket;
}

let firstClassTicket = 0;
let economyTicket = 0;
let firstClassCost = 0;
let economyCost = 0;
let subTotalCost = 0;
let vat = 0;
let totalCost = 0;

//function to Update Sub-total, Vat & Total Cost acording to Number of Ticket
function updateCost(){
    firstClassTicket = parseInt(document.getElementById("firstClass-numberOfTicket").value);
    economyTicket = parseInt(document.getElementById("economy-numberOfTicket").value);
    firstClassCost = 150 * firstClassTicket;
    economyCost = 100 * economyTicket;

    subTotalCost = firstClassCost + economyCost;
    vat = Math.round(subTotalCost * 0.1);
    totalCost = subTotalCost + vat;

    document.getElementById("sub-total").innerText = subTotalCost;
    document.getElementById("vat").innerText = vat;
    document.getElementById("total").innerText = totalCost;
}


// Function to add Event Listener to plus & minus Button
function addEventHandler(btnId, inputId, purpose){
    document.getElementById(btnId).addEventListener("click", function(){
        let numberOfTicket = parseInt(document.getElementById(inputId).value);
        numberOfTicket = purpose(numberOfTicket);
        document.getElementById(inputId).value = numberOfTicket;
        updateCost();
    });
}

// add event handler to plus button of first class ticket
addEventHandler("firstClass-plusBtn", "firstClass-numberOfTicket", increase);

//add event handler to minus button of first class ticket
addEventHandler("firstClass-minusBtn", "firstClass-numberOfTicket", decrease);

// add event handler to plus button of economy ticket
addEventHandler("economy-plusBtn", "economy-numberOfTicket", increase);

//add event handler to minus button of economy ticket
addEventHandler("economy-minusBtn", "economy-numberOfTicket", decrease);
