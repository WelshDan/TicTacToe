const box = document.querySelectorAll("square");
const statusDisplay = document.querySelector(".status");
const restartGame = document.getElementById("restart");
const imgx = document.getElementById('img-x');
const imgo = document.getElementById('img-o');
const winCheck =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["", "", "", "", "", "", "", "", "",]
let startPlayer = true;
let running = false;

startGame();
function startGame () {
    startPlayer = true
    statusDisplay.textContent = `Player 1's turn`
    running = true;
}

function squareClicked () {
   const choice = this.getElementById("choice");
   if (options ["choice"] != "" || !running) {
    return;
   }
    updateSquare(this, choice);
    winCheck();
   }

function updateSquare () {
    if ((startPlayer == true ? imgx : imgo))
}

function changePlayer () {

}

function winCheck () {

}

function restartGame () {
    box.forEach(box => box.addEventListener("click", boxClicked))
    restart.addEventListener("click", restartGame)
    startPlayer = true
    statusDisplay.textContent = `Player 1's turn`
    running = true;
}