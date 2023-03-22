const startGrid = [ "", "", "", "", "", "", "", "", "",]
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

function restart() {
    console.log();
}
playAgain.addEventListener('click', startGrid)
function restart() {
    startGrid.forEach(("") => {
        startGrid.classList.remove('square')
    })
}

