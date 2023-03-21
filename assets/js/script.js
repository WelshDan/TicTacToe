let isPlayer2 = false;
let newGame = false;
const string = newGame ? "" : (isPlayer2 ? "O" : "X");
 function add() {
    isPlayer2 = true;
    document.getElementById("00").innerHTML = string;
    newGame = false;
    alert(string);
  }





  let square = document.getElementById('0');
  square.addEventListener('click', add);






const gameGrid = document.getElementById(".game-grid")
const statusDisplay = document.querySelector(".status")



const won =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
/*
newGame()
playAgain.addEventListener('click', newGame)
function newGame() {
    isPlayer2 = false
        square.classList.remove();
}

const element = document.getElementById("0");
element.addEventListener('click', clickSquare);
function clickSquare() {
    alert("Hello");
}

function playerControl() 
    if (player1) {

}

function checkMove(); {
    if ("square" === "") {

    }
}

function insertSign() {

}

function nextPlayer() {

}

function calculateWinner() {

}
*/