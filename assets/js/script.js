const statusDisplay = document.querySelector(".status");
const tiles = document.getElementsByClassName('square');
const playAgain = document.getElementsByClassName("playAgain");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const clear = document.querySelector(".playAgain");
clear.addEventListener('click', newGame);

let blanks = Array(9).fill("");
let playerIcon = 'X';
let running = false;

/* Game start command and reading the game tiles for playing */
startGame();

function startGame() {
    Array.from(tiles).forEach(function(tile) {
    tile.addEventListener('click', onTileClick);
    });
    statusDisplay.textContent = `Player ${playerIcon}'s turn`;
    running = true;
}

/* Tile is chosen by player.
Before the player's icon 'X' or 'O' is inserted into a chosen grid square,
the game is checked to see if there is a winner and then if the tile chosen
is empty*/


function onTileClick(event) {
    if (running){
        const target = event.target;
        if (target.innerHTML !== "") {
            if (!blanks[Number(target.id)]) {  
                blanks[Number(target.id)] = playerIcon;
                updateSquare(target.id);
                changePlayerIcon();
            }
        checkWinner();
        }
    } else {
        return;
    }
}

/* The square is updated with the player's icon(X or O) if the game
is still active (not won or drawn) */

function updateSquare(elementId) {
    document.getElementById(elementId).innerHTML = playerIcon;
}

/* Player turn is changed. Active player icon to be inserted on click
of empty tile changes between 'X' and 'O' */

function changePlayerIcon() {
    playerIcon = (playerIcon === 'O') ? 'X' : 'O';
    statusDisplay.textContent = `Player ${playerIcon}'s turn`;
}

/* If there are three of the same player icons in a row then a winner is
decided. When all tiles have been filled without a three-in-a-row then the
game results in a draw. A status is also displayed showing that X or O are
the winner, or if it is a draw */

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i <winConditions.length; i++) {
        let condition = winConditions[i];
        let tileA = blanks[condition[0]];
        let tileB = blanks[condition[1]];
        let tileC = blanks[condition[2]];

        if (tileA == "" || tileB == "" || tileC == "") {
            continue;
        } if (tileA == tileB && tileB == tileC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        changePlayerIcon();
        statusDisplay.textContent = `${playerIcon} WINS!`;
        running = false;
    } else if (!blanks.includes("")) {
        statusDisplay.textContent = `It's a DRAW!`;
    }
}

/* This function clears the game tiles of their X's and O's.
Note: I have added the paragraph tags in the clearGame function
for it to match how it is laid out in index.html. It doesn't work
without these in place.
*/

function clearGame() {
    Array.from(tiles).forEach(function(tile) {
        tile.innerHTML = "<p></p>";
    });
    
    blanks = Array(9).fill("");
    playerIcon = 'X';
    running = true;
    statusDisplay.textContent = `NEW GAME! Player ${playerIcon}'s turn`;
}

/* On click of "New Game button", page is a reloaded so a
new game can begin */

function newGame() {
    clearGame();
}