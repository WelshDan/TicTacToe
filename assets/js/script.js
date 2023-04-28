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

let blanks = ["", "", "", "", "", "", "", "", ""];
let playerIcon = 'X';
let running = false;

startGame();

function startGame () {
    Array.from(tiles).forEach(function(tile) {
    tile.addEventListener('click', onTileClick);
});
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
    running = true;
}

function onTileClick (event) {
    if (running){
        const target = event.target;
        if (target.innerHTML !== "") {
            if (!blanks[Number(target.id)]) {
                blanks[Number(target.id)] = playerIcon;
                updateSquare(target.id);
        }
        checkWinner ()
        }
    } else {
        return
    }
}

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
        statusDisplay.textContent = `${playerIcon} WINS!`
        running = false;

    } else if (!blanks.includes("")) {
        statusDisplay.textContent = `It's a DRAW!`
    } else {
        changePlayerIcon();
    }
}

function updateSquare (elementId) {
    document.getElementById(elementId).innerHTML = playerIcon;
}

function changePlayerIcon () {
    playerIcon = (playerIcon === 'X') ? 'O' : 'X';
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
}

function newGame () {
    newGame.addEventListener("click", newGame);
    console.log("Hello");}