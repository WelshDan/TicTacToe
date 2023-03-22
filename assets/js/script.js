const box = document.querySelectorAll("square");
const statusDisplay = document.querySelector(".status");
const restartGame = document.getElementById("restart");
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
let startPlayer = "x";
let running = false;

startGame();

function startGame () {
    box.forEach(box => box.addEventListener("click", boxClicked))
    restart.addEventListener("click", restartGame)
    statusDisplay.textContent = `${player}'s turn`
    running = true;
}

function squareClicked () {
   const choice = this.getElementById("choice");
   if (options ["choice"] != ""; || !running) {
    return;
   }
    updateSquare(this, choice)
   }
}

function updateSquare () {

}

function changePlayer () {

}

function winCheck () {

}

function restartGame () {

}