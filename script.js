
function ticketUnitChange(ticket, increase) {
    const ticketInput = document.getElementById(ticket + '-class');
    const ticketInputNumber = parseInt(ticketInput.value);
    let inputNumber = ticketInputNumber;

    if (increase == true ) {
        inputNumber = ticketInputNumber + 1;
    } if (increase == false && ticketInputNumber > 0) {
        inputNumber = ticketInputNumber - 1;
    }
    ticketInput.value = inputNumber;
    calculateTotal()
}

function calculateTotal() {
    const firstClassInput = getInputValue('first');
    const economyInput = getInputValue('economy');

    const subTotal = firstClassInput * 150 + economyInput * 100;
    document.getElementById("sub-total").innerText = '$ ' + subTotal;

    const vat = Math.round(subTotal * .10);
    document.getElementById("vat").innerText = '$ ' + vat;

    const inTotal = subTotal + vat;
    document.getElementById("in-total").innerText = '$ ' + inTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-class');
    const ticketInputNumber = parseInt(ticketInput.value);
    return ticketInputNumber;
}

// alert on book-now button and go-back button

document.getElementById("book-now").addEventListener('click',function () {
    alert("Dear Customer, To get our service you must have wear a mask on your mouth.");

    document.getElementById("booking-input").style.display = 'none';
    document.getElementById("booking-confirm").style.display = 'block';
})
document.getElementById("go-back").addEventListener('click', function() {

    document.getElementById("booking-input").style.display = 'block';
    document.getElementById("booking-confirm").style.display = 'none';
})