// const cache
const cardsEl = document.querySelectorAll('.cards');

const titleEl = document.getElementById('title');
titleEl.textContent = 'Memory Game'

const splashTitle = document.getElementById('splashTitle');
splashTitle.innerHTML = 'Welcome, Have Fun!';

// let cache
let currentPlayer;
let score = 0;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// SHOW SPLASH TITLE / TITLE / USERNAME / SCORE DISPLAY
document.getElementById("submit").onclick = function(){
    currentPlayer = document.getElementById("userText").value;
    document.getElementById("scoreDisplay").innerHTML = `<u>Score</u><br>${currentPlayer}: ${score}`
    document.getElementById('splash').style.display = ('none')
};

// Game functions
// Flip cards and invoke match
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

// Check if cards are same and disable and reflip
function checkMatch() {
    let match = firstCard.dataset.i === secondCard.dataset.i;
    match ? disableCard() : reflipCard()
    if (match === true) {
        score = score + 1
        document.getElementById('scoreDisplay').innerHTML = `<u>Score</u> <br>${currentPlayer}: ${score}`
    }
}

// Disable cards so not to be reflipped if they match
function disableCard() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();
};

// reflip if not match
function reflipCard() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1000)
}

// reset board 
function resetBoard() {
    flippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

// Shuffle cards and position on board
function shuffleCards() {
    cardsEl.forEach(card => {
        let random = Math.floor(Math.random() * 14);
        card.style.order = random;
    });
}
shuffleCards()

// restart game button shuffles cards and resets board
function restartGame(){
    score = 0;
    document.getElementById('scoreDisplay').innerHTML = `<u>Score</u> <br>${currentPlayer}: ${score}`
    cardsEl.forEach(card => {
        card.addEventListener('click', flipCard)
        card.classList.remove('flip')
    })
    shuffleCards();
}

// add event to restart btn
document.getElementById('restartGame').addEventListener('click', restartGame)

// add event to cards for click
cardsEl.forEach(card => card.addEventListener('click', flipCard));

