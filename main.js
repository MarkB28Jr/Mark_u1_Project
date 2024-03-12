// cache
const cardsEl = document.querySelectorAll('.cards');
const splashTitleEl = document.getElementById('splashTitle');
splashTitleEl.textContent = 'Memory Game'
const titleEl = document.getElementById('title');
titleEl.textContent = 'Memory Game'
console.log(titleEl);

let fadeState = true
let currentPlayer;
let score = 0;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// SHOW USER NAME AND SCORE
document.getElementById("submit").onclick = function() {
    currentPlayer = document.getElementById("userText").value;
    document.getElementById("scoreDisplay").innerHTML = `<u>Score</u> <br> ${currentPlayer}: ${score}`
};

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

document.getElementById('startBtn').onclick = function() {
    if ( fadeState === )
}


