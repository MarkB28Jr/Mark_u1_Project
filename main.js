// cache
const cardsEl = document.querySelectorAll('.cards');
const titleEl = document.querySelector('h1');


let currentPlayer = 'Unknown Player';
let score = 0;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!flippedCard) {
        firstCard = this;
        flippedCard = true;
        return;
    }
    secondCard = this;
    checkIfMatched();
}

cardsEl.forEach(card => card.addEventListener('click', flipCard));

// SHOW USER NAME AND SCORE
document.getElementById("submit").onclick = function() {
    currentPlayer = document.getElementById("userText").value;
    document.getElementById("scoreDisplay").innerHTML = `<u>Score Baby</u> <br> ${currentPlayer}: ${score}`
};



