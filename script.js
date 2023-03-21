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
                const clickEvent = (e) => {
                    let player = 1;
                    gridElement.textContent = "X";
                    //make div unclickable
                    gridElement.style.pointerEvents = "none";
                    //console.log(i.toString()+j.toString());
                    console.log(e.target)
                    opponentPlay(i,j,e);
                    //Check for winner by using location of the cell as the argument
                    /*let result = checkWinner(player,i,j);
                    if(result == false){
                        opponentPlay(i,j);
                    }else{

                    }
                    */
                };
                gridElement.addEventListener(`click`, clickEvent)
                gameContainer.appendChild(gridElement);
                boardRow.push(gridElement);       
            }
            board.push(boardRow);
        }
    }
    const resetBoard = () => {
        //For every child of gameContainer, set the text content of every node to empty
        var children = gameContainer.children;
        for(let i = 0; i < children.length; i++){
            children[i].textContent = "";
            children[i].style.pointerEvents = "auto";
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

function checkWinner(player,xPos,yPos){
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
    let legalMove = false;
    //For corners
    if(xPos == 0 && yPos == 0){
        let randomChoice = Math.floor(Math.random() * 3);
        if(randomChoice == 0){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                legalMove = true;
            }
        }
    }else if(xPos == 2 && yPos == 2){
        let randomChoice = Math.floor(Math.random() * 3);
        if(randomChoice == 0){
            if(document.getElementById("12").textContent == ""){
                document.getElementById("12").textContent = "O";
                document.getElementById("12").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("21").textContent == ""){
                document.getElementById("21").textContent = "O";
                document.getElementById("21").style.pointerEvents = "none";
                legalMove = true;
            }
        }
    }else if(xPos == 2 && yPos == 0){
        let randomChoice = Math.floor(Math.random() * 3);
        if(randomChoice == 0){
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("21").textContent == ""){
                document.getElementById("21").textContent = "O";
                document.getElementById("21").style.pointerEvents = "none";
                legalMove = true;
            }
        }
    }else if(xPos == 0 && yPos == 2){
        let randomChoice = Math.floor(Math.random() * 3);
        if(randomChoice == 0){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("12").textContent == ""){
                document.getElementById("12").textContent = "O";
                document.getElementById("12").style.pointerEvents = "none";
                legalMove = true;
            }
        }

    }else if(xPos == 0 && yPos == 1){
        let randomChoice = Math.floor(Math.random() * 5);
        if(randomChoice == 0){
            if(document.getElementById("00").textContent == ""){
                document.getElementById("00").textContent = "O";
                document.getElementById("00").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 2){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 3){
            if(document.getElementById("12").textContent == ""){
                document.getElementById("12").textContent = "O";
                document.getElementById("12").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("02").textContent == ""){
                document.getElementById("02").textContent = "O";
                document.getElementById("02").style.pointerEvents = "none";
                legalMove = true;
            }
        }

    }else if(xPos == 1 && yPos == 0){
        let randomChoice = Math.floor(Math.random() * 5);
        if(randomChoice == 0){
            if(document.getElementById("00").textContent == ""){
                document.getElementById("00").textContent = "O";
                document.getElementById("00").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 2){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 3){
            if(document.getElementById("21").textContent == ""){
                document.getElementById("21").textContent = "O";
                document.getElementById("21").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("20").textContent == ""){
                document.getElementById("20").textContent = "O";
                document.getElementById("20").style.pointerEvents = "none";
                legalMove = true;
            }
        }

    }else if(xPos == 1 && yPos == 1){
        let randomChoice = Math.floor(Math.random() * 8);
        if(randomChoice == 0){
            if(document.getElementById("00").textContent == ""){
                document.getElementById("00").textContent = "O";
                document.getElementById("00").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 2){
            if(document.getElementById("02").textContent == ""){
                document.getElementById("02").textContent = "O";
                document.getElementById("02").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 3){
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 4){
            if(document.getElementById("12").textContent == ""){
                document.getElementById("12").textContent = "O";
                document.getElementById("12").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 5){
            if(document.getElementById("20").textContent == ""){
                document.getElementById("20").textContent = "O";
                document.getElementById("20").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 6){
            if(document.getElementById("21").textContent == ""){
                document.getElementById("21").textContent = "O";
                document.getElementById("21").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("22").textContent == ""){
                document.getElementById("22").textContent = "O";
                document.getElementById("22").style.pointerEvents = "none";
                legalMove = true;
            }
        }

    }else if(xPos == 1 && yPos == 2){
        let randomChoice = Math.floor(Math.random() * 5);
        if(randomChoice == 0){
            if(document.getElementById("02").textContent == ""){
                document.getElementById("02").textContent = "O";
                document.getElementById("02").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 2){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 3){
            if(document.getElementById("21").textContent == ""){
                document.getElementById("21").textContent = "O";
                document.getElementById("21").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("22").textContent == ""){
                document.getElementById("22").textContent = "O";
                document.getElementById("22").style.pointerEvents = "none";
                legalMove = true;
            }
        }

    }else if(xPos == 2 && yPos == 1){
        let randomChoice = Math.floor(Math.random() * 5);
        if(randomChoice == 0){
            if(document.getElementById("20").textContent == ""){
                document.getElementById("20").textContent = "O";
                document.getElementById("20").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 2){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                legalMove = true;
            }
        }else if(randomChoice == 3){
            if(document.getElementById("12").textContent == ""){
                document.getElementById("12").textContent = "O";
                document.getElementById("12").style.pointerEvents = "none";
                legalMove = true;
            }
        }else{
            if(document.getElementById("22").textContent == ""){
                document.getElementById("22").textContent = "O";
                document.getElementById("22").style.pointerEvents = "none";
                legalMove = true;
            }
        }
    }

    console.log(legalMove);
    if(!legalMove){
        console.log("hey")
        let move = 1;
        while(move == 1){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(document.getElementById(i.toString()+j.toString()).textContent == ""){
                        document.getElementById(i.toString()+j.toString()).textContent = "0";
                        document.getElementById(i.toString()+j.toString()).style.pointerEvents = "none";
                        move = 2;
                        j = i = 3;
                    }
                }
            }
        }
    }

    //Check for winner
    //checkWinner(player,xPos,yPos);

}