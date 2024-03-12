# Pseudocode

## Minimal viable Game setup
- pictures properly present on cards
- cards are randomized and placed in there spots.
- the cards are clickable and when they are clicked they reveal the picture.
- each player only get 2 turn unless they find a pair, there turn restarts.
- the game will end when all the pairs are found or one player reachs a certain number of pairs.

## Game Overall 

### ***Starting Screen***
- Player will be told to enter their name.
- This screen will start by the game by clicking the start game button.

### ***Game Screen***
- Game screen will have 30 cards spread out.
- 5 rows x 6 columns
- User player will go first.
- when the start screen disappears after clicking start game the screen will disappear and 5 seconds later the cards will be randomized and places in the position.
- above the cards will have player score of how many pairs they have aquired.
- above the player score area will be the name of the game. 
- once the cards have been placed text above the cards will show which players turn it is and the number of clicks they have remaining.
- once the card is click it will flip to reveal the picture.
- then the cards will be compared to each other and if they are the same that player will have their score increased and those cards they had clicked will disappear.
- that same player will get one more turn and will continue unitl they fail to find a pair.

### ***End Screen***
- After the cards have been all paired or if one player gets a score of 16 the game will end
- the end of game screen will pop up and show the total number of games won.
- a restart button will be revealed and above the restart button will reveal the winning player.

## Game Variables
- array of 15 * 2 in a (grid 5 X 6) html, css

## Event Listners
- all 30 divs will be click able
- if clicked boxes equal each other
    - cards disappear
    - same player get another 2 clicks
    Then
    - next player gets turn
- if clicked boxes not equal each other 
    next players turn
- if the card is clicked and showing picture
    - card cant be clicked again
- Everytime a players turn starts counter showing players turn go down if the cards reveals a picture

## Functions
- init() sets everything up and how the game will run.
    - lets players know whos turn it is
    - sets game 
    - increases counter for each pair

- render()
    - shows each card and renders the card once clicked to show picture

- message() 
    - announce which players turn it is
    - show count on how many click they have had each turn
    - shows the count go up if a pair is found

- winner/restart()
    - shows winning screen
    - announcing the winning the score of wins
    - restart button 

- winningCombos()
    - which cards if found together pair up
    - then makes them disappear after being found

- startingGame()
    - shows first page asking if they want to play 
    - ask player to input name
    - start button to run game

- randomizeCards()
    - randomizes the cards and randmizes where they are placed in the array of the board
    - once card is clicked flips first card over.
    - second card is clicked flip card over for 5-10 seconds
    - once game is restart randomized runs again.




## Game
- build splash screen
- build text input for score name
- build startgame btn
- have game get rid of splash screen

- build title
- player status area
- 
- build gameboard
- build cards
    - make 14 cards 7 pairs
- make cards flip
    - have all cards rotate once clicked
    - make it so cards cant be clicked twice
    - make it so player only gets 2 clicks per turn
    - if cards are a match they stay 
    - once a pair has been found you take next turn
    - if the player finds a pair the score will increase by 1
        - the cards will be compared to each other to see if they match
- if cards are not a match the cards then flip back over and the player trys again
- once all cards have been matched the game is over
    - reset game button will shuffle the cards locations on the board
