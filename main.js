// cache
const cardsEl = document.querySelectorAll('.cards');
const splashTitleEl = document.getElementById('splashTitle');
splashTitleEl.textContent = 'Memory Game'
const titleEl = document.getElementById('title');
titleEl.textContent = 'Memory Game'

let currentPlayer;
let score = 0;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// SHOW SPLASH TITLE / TITLE / USERNAME / SCORE
document.getElementById("submit").onclick = function () {
    currentPlayer = document.getElementById("userText").value;
    document.getElementById("scoreDisplay").innerHTML = `<u>Score</u> <br> ${currentPlayer}: ${score}`
};

// Game functions
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkMatch();
}

function checkMatch() {
    let match = firstCard.dataset.i === secondCard.dataset.i;
    match ? disableCard() : reflipCard()
    if (match === true) {
        return score = score + 1
    }
}

function disableCard() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard()
};

function reflipCard() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1000)
}

function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


(function shuffleCards() {
    cardsEl.forEach(card => {
        let randomPos = Math.floor(Math.random() * 14);
        card.style.order = randomPos;
    });
})();


document.getElementById('restartGame').onclick = function () {
    
    resetBoard()
}

cardsEl.forEach(card => card.addEventListener('click', flipCard));

