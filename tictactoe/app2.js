const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
    
const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
    
initGame();
    
function initGame() {
    //Let us attach event handler for each cell for the click event
    //We have 8 cells so a for loop is proper
    for(let index=0; index<cells.length; index++) {
        const cell = cells[index];
        cell.addEventListener("click", cellClicked);
    }
    restartBtn.addEventListener("click", restartGame);
        
    if(currentPlayer == "X") {statusText.textContent = "It is X's turn";}
    else {statusText.textContent = "It is O's turn";}
        
    running = true;
    }
    
function cellClicked() {
    //Get cellIndex
    const cellIndex = this.getAttribute("cellIndex");
    
    //Make sure it is the empty dell that is clicked
    if(options[cellIndex] != "" || !running) {
        return;
    }
    
    updateCell(this, cellIndex);
    // rotatePlayer();
    checkWinner();
}
    
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
 }
    
function rotatePlayer() {
    if(currentPlayer == "X") {currentPlayer = "O";}
     else {currentPlayer = "X";}
    
    if(currentPlayer == "X") {statusText.textContent = "It is X's turn";}
    else {statusText.textContent = "It is O's turn";}
}
    
function checkWinner() {
    let somebodywon = false;
    
    for(let i=0; i<winConditions.length; i++) {
        const conditions = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[0]];
        const cellC = options[condition[0]];
    
        if(cellA == "" || cellB == "" || cellC == "") {continue;}
        if(cellA == cellB && cellB == cellC) {
            somebodywon = true;
            break;
        }
    }
    if(somebodywon) {
        if(currentPlayer == "X") {statusText.textContent = "X Won";}
        else {statusText.textContent = "O Won";}
    }
     else if(!options.includes("")) { //It is a draw
        statusText.textContent = "It is a Draw!";
        running = false;
    }
    else {rotatePlayer();}
 }
    
function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    
    if(currentPlayer == "X") {statusText.textContent = "It is X's turn";}
    else {statusText.textContent = "It is O's turn";}
    
    for(let index=0; index<cells.length; index++) {
        cell = cells[index];
        cell.textContent = ""
    }
    
    running = true;
}