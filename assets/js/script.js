const statusDisplay = document.querySelector(".status");
const tiles = document.getElementsByClassName('square');
const winConditions =[
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

startGame();

function startGame () {
    Array.from(tiles).forEach(function(tile) {
        tile.addEventListener('click', onTileClick);
    });
    startPlayer = true
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
    running = true;
}

function onTileClick (event) {
    const target = event.target;
    if(!blanks[Number(target.id)]) {
        blanks[Number(target.id)] = playerIcon;
        updateSquare(target.id);
    }
    checkWinner();
}

function updateSquare (elementId) {
    document.getElementById(elementId).innerHTML = playerIcon;
}

function changePlayerIcon () {
    playerIcon = playerIcon === 'O' ? 'X' : 'O';
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
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

function restartGame () {
  alert("hello")
}

restart.addEventListener('click', restartGame);
startPlayer = true
statusDisplay.textContent = `Player ${playerIcon}'s turn`
running = true;

