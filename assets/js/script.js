document.addEventListener("DOMContentLoaded", function() {
})

let startingPlayer = player1;
let enterImg = (player1 ? "x" : "o");
document.addEventListener("click", enterImg)
function enterImg() {
}


/*
let isPlayer2 = false;
let newGame = true;
const string = newGame ? "" : (isPlayer2 ? "O" : "X");
 function add() {
    isPlayer2 = true;
    document.getElementById("00").innerHTML = string;
    newGame = false;
    alert(string);
  }
/*

const startGrid = [ "", "", "", "", "", "", "", "", "",]
  let square = document.getElementById('0');
  square.addEventListener('click', add);

const gameGrid = document.getElementById(".game-grid")
const statusDisplay = document.querySelector(".status")

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

function startGame () {

}

function squareClicked () {

}

function updateSquare () {

}

function changePlayer () {

}

function winCheck () {

}

function restartGame () {

}