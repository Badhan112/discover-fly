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


// to add Event Listener to the Book Now Button
function addBookBtnEventHandler(btnId){
    document.getElementById(btnId).addEventListener("click", function(){
        if(firstClassTicket == 0 && economyTicket == 0){
            alert("Select at least One Ticket");
        }
        else{
            document.getElementById("ticket-confirmation-area").style.display = "flex";
            document.getElementById("ticket-booking-area").style.display = "none";
            document.getElementById("confirm-total-cost").innerText = '$' + totalCost;
            document.getElementById("confirm-firstClass-totalTicket").innerText = firstClassTicket;
            document.getElementById("confirm-firstClass-totalCost").innerText = '$' + firstClassCost;
            document.getElementById("confirm-economy-totalTicket").innerText = economyTicket;
            document.getElementById("confirm-economy-totalCost").innerText = '$' + economyCost;
            document.getElementById("confirm-total-vat").innerText = '$' + vat;
        }
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

//add event handler to the Book Now button
addBookBtnEventHandler("bookNow-Btn");
