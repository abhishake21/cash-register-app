const billAmount = document.querySelector('#bill-amount-box');
const cashGiven = document.querySelector('#cash-given-box');
const nextBtn = document.querySelector('.next');
const checkBtn = document.querySelector('.check');
const billErrorMessage = document.querySelector('.bill-error');
const cashErrorMessage = document.querySelector('.cash-error');
const notesList = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener('click', () => {
    if (billAmount.value > 0) {
        billErrorMessage.innerText = '';
    } else {
        billErrorMessage.innerText = 'Bill Amount should be greater than 0'
    }
});


checkBtn.addEventListener('click', () => {
    if (cashGiven.value >= billAmount.value) {
        cashErrorMessage.innerText = '';
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    } else {
        cashErrorMessage.innerText = 'Please pay or we will call the Police 👮‍♂️'
    }
});


function calculateChange(amountToBeReturned) {
    for (let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        notesList[i].innerText = numberOfNotes;
    }
}