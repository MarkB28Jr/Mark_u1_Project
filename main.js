// cache
const cardsEl = document.querySelectorAll('.cards');
const titleEl = document.querySelector('h1');
const playerStatus = document.querySelector('p');

let flippedCard = false;
let lockBoard = false;
let currentPlayer = '';
let score = 0;
let firstCard, secondCard;

playerStatus.innerHTML = `<u>Score</u> <br> ${currentPlayer}: ${score}`;
console.log(playerStatus);

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






