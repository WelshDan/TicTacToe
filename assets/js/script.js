const box = document.querySelectorAll("square");
const statusDisplay = document.querySelector(".status");
const restartGame = document.getElementById("restart");
const imgx = document.getElementById('img-x');
const imgo = document.getElementById('img-o');
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

let options = ["", "", "", "", "", "", "", "", ""];
let playerIcon = 'X';

startGame();

function startGame () {
    startPlayer = true
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
    running = true;
}

function onTileClick (event) {
    const target = event.target;
    if(!options[Number(target.id)]) {
        options[Number(target.id)] = playerIcon;
        updateSquare(target.id);
        changePlayerIcon();
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

    for (let i = 0; i < winConditions; i++) {
        let condition = winConditions[i];
        let tileA = options[condition[0]];
        let tileB = options[condition[1]];
        let tileC = options[condition[2]];

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
    } else if (!options.includes("")) {
        statusDisplay.textContent = `It's a DRAW!`
    }
}
/*
function restartGame () {
    options = ["", "", "", "", "", "", "", "", "",];
    Array.from(tiles).forEach(function(tile) {
        tile.innerHTML = "";
    });
    changePlayerIcon();
}
*/
Array.from(tiles).forEach(function(tile) {
    tile.addEventListener('click', onTileClick);
});