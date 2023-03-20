const gameContainer = document.getElementById("game-container");
const gameBoard = (function () {
    let turnCounter = 0;
    let board = [];
    //Creates a 3x3 board
    const createBoard = () => {
        for(let i = 0; i < 3; i++){
            let boardRow = [];
            for(let j = 0; j < 3; j++){
                const gridElement = document.createElement("grid");
                gridElement.id = i.toString() + j.toString();
                gridElement.style.display = "flex";
                gridElement.style.alignItems = "center";
                gridElement.style.justifyContent = "center";
                gridElement.style.backgroundColor = "black";
                gridElement.style.color = "white";
                gridElement.style.border = "1px solid green";
                gridElement.addEventListener(`click`, function(e){
                    let player = 1;
                    gridElement.textContent = "X";
                    //make div unclickable
                    gridElement.removeEventListener(`click`, e);
                    //Check for winner by using location of the cell as the argument
                    let result = checkWinner(player,i,j);
                    if(result == false){
                        opponentPlay(i,j);
                    }else{

                    }
                });
                gameContainer.appendChild(gridElement);
                boardRow.push(gridElement);       
            }
            board.push(boardRow);
        }
        console.log(board);
    }
    const resetBoard = () => {
        //For every child of gameContainer, set the text content of every node to empty
        var children = gameContainer.children;
        for(let i = 0; i < children.length; i++){
            children[i].textContent = " ";
        }
    }
    return{turnCounter, board, createBoard, resetBoard}
})();

gameBoard.createBoard();

const resetButton = document.getElementById("rButton");
resetButton.addEventListener(`click`, function(e){
    gameBoard.turnCounter = 0;
    gameBoard.resetBoard();
});

function checkWinner(player, xPos,yPos){
    let winner = false;
    if(player == 1){
        console.log(gameBoard.board[xPos][yPos])
        gameBoard.turnCounter += 1;
        //On turn 3 start checking for winner
        if(gameBoard.turnCounter >= 3 && gameBoard.turnCounter  < 5){
                
        }else if(gameBoard.turnCounter  == 5){
        //On turn 5, the whole board will be filled
        //Check for winner, if not, tie
        }

    }else{

    }
    return winner;
}

function opponentPlay(xPos,yPos){
    let player = 2;
    //Place depending on where the player last placed

    //Remove event listener

    //Check for winner
    checkWinner(player,newXPos,newYPos);

}