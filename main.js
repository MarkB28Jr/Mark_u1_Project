// cache
const cardsEl = document.querySelectorAll('.cards');
const splashTitleEl = document.getElementById('splashTitle');
const titleEl = document.getElementById('title');

let currentPlayer;
let score = 0;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// SHOW SPLASH TITLE / TITLE / USERNAME / SCORE
splashTitleEl.textContent = 'Memory Game'
titleEl.textContent = 'Memory Game'
document.getElementById("submit").onclick = function () {
    currentPlayer = document.getElementById("userText").value;
    document.getElementById("scoreDisplay").innerHTML = `<u>Score</u> <br> ${currentPlayer}: ${score}`
};

// Game functions
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





