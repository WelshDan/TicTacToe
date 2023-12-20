/* */
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
clear.addEventListener('click', clearGame)

let blanks = ["", "", "", "", "", "", "", "", ""];
let playerIcon = 'X';
let running = false;

/* Game start command and reading the game tiles for playing */
startGame();

function startGame () {
    Array.from(tiles).forEach(function(tile) {
    tile.addEventListener('click', onTileClick);
    });
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
    running = true;
}

/* Tile is chosen by player. Before the players icon 'X' or 'O' is inserted
the game is checked to see if there is a winner and then if the tile chosen is empty*/


function onTileClick (event) {
    if (running){
        const target = event.target;
        if (target.innerHTML !== "") {
            if (!blanks[Number(target.id)]) {  
                blanks[Number(target.id)] = playerIcon;
                updateSquare(target.id);
                changePlayerIcon();
            }
        checkWinner ()
        }
    } else {
        return
    }
}

function updateSquare (elementId) {
    document.getElementById(elementId).innerHTML = playerIcon;
}

/* Player turn is changed. Active player icon to be inserted on click
of empty tile changes between 'X' and 'O' */

function changePlayerIcon () {
    playerIcon = (playerIcon === 'O') ? 'X' : 'O';
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
}

/* If there are three of the same player icons in a row then a winner is
decided. Otherwise the game results in a draw. A status is also displayed
showing that X or O are the winner, or if it is a draw */

function checkWinner () {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
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
        statusDisplay.textContent = `${playerIcon} WINS!`
        running = false;
    } else if (!blanks.includes("")) {
        statusDisplay.textContent = `It's a DRAW!`
    }
}

/* On click of "New Game button", page is a reloaded so a
new game can begin */

function newGame () {
    clearGame();
    startGame();
}

/* Add a function that clears all of the used tiles to show
9 empty ones */

function clearGame () {
    Array.from(tiles).forEach(function(tile) {
        tile.innerHTML = "";
    });
    
    blanks = ["", "", "", "", "", "", "", "", ""];
    playerIcon = 'X';
    running = true;
    statusDisplay.textContent = `NEW GAME! Player ${playerIcon}'s turn`
}
