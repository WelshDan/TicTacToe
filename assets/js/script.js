const box = document.querySelectorAll("square");
const statusDisplay = document.querySelector(".status");
const restartGame = document.getElementById("restart");
const imgx = document.getElementById('img-x');
const imgo = document.getElementById('img-o');
const tiles = document.getElementsByClassName('square');
const winCombos =[
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
let playerIcon = '1';

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
    playerIcon = playerIcon === '2' ? '1' : '2';
    statusDisplay.textContent = `Player ${playerIcon}'s turn`
}

function checkWinner (tiles) {
    if (winCheck = true ? statusDisplay.textContent = `Player ${playerIcon} Won!` : 
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
