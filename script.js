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
                    console.log(i.toString()+j.toString());
                    //Check for winner by using location of the cell as the argument
                    let result = checkWinner(player,i,j);
                    console.log("this is the result: " + result.toString())
                    if(result == false){
                        opponentPlay(i,j);
                    }else{
                        resetBoard();
                    }
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
    let coordinates = xPos.toString()+yPos.toString();
    console.log(coordinates)
    gameBoard.turnCounter += 1;
    let winner = false;
    console.log("Turn:" + gameBoard.turnCounter);
    if(player == 1){
        //On turn 3 start checking for winner
        if(gameBoard.turnCounter >= 3 && gameBoard.turnCounter  < 5){
            console.log(xPos.toString()+yPos.toString())
            if(coordinates == "11"){//Starting with (0,0)
                //For the middle cell (1,1), need to check these
                if(gameBoard.board[0][0].textContent == "X" && gameBoard.board[2][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[0][1].textContent == "X" && gameBoard.board[2][1].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[0][2].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "X" && gameBoard.board[1][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "00"){//Now the top left corner
                if(gameBoard.board[0][1].textContent == "X" && gameBoard.board[0][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[2][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][0].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "02"){//Now the top right corner
                if(gameBoard.board[0][1].textContent == "X" && gameBoard.board[0][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "X" && gameBoard.board[2][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "20"){//Now the bottom left corner
                if(gameBoard.board[1][0].textContent == "X" && gameBoard.board[0][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[0][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[2][1].textContent == "X" && gameBoard.board[2][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "22"){//Now the bottom right corner
                if(gameBoard.board[2][1].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[0][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "X" && gameBoard.board[0][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "01"){//Now the top middle
                if(gameBoard.board[0][0].textContent == "X" && gameBoard.board[0][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[2][1].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "12"){//Now the right middle
                if(gameBoard.board[0][2].textContent == "X" && gameBoard.board[2][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[1][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "21"){//Now the bottom middle
                if(gameBoard.board[2][2].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[0][1].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "10"){//Now the left middle
                if(gameBoard.board[0][0].textContent == "X" && gameBoard.board[2][0].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "X" && gameBoard.board[1][2].textContent == "X"){
                    console.log("You win")
                    winner = true;
                }
            }
        }else if(gameBoard.turnCounter  == 5){
        //On turn 5, the whole board will be filled
        //Check for winner, if not, tie
        }

    }else{
        if(gameBoard.turnCounter >= 3 && gameBoard.turnCounter  < 5){
            console.log(xPos.toString()+yPos.toString())
            if(coordinates == "11"){//Starting with (0,0)
                //For the middle cell (1,1), need to check these
                if(gameBoard.board[0][0].textContent == "O" && gameBoard.board[2][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[0][1].textContent == "O" && gameBoard.board[2][1].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[0][2].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "O" && gameBoard.board[1][0].textContent == "O"){
                    console.log("You win")  
                    winner = true; 
                }
            }else if(coordinates == "00"){//Now the top left corner
                if(gameBoard.board[0][1].textContent == "O" && gameBoard.board[0][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[2][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][0].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "02"){//Now the top right corner
                if(gameBoard.board[0][1].textContent == "O" && gameBoard.board[0][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "O" && gameBoard.board[2][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "20"){//Now the bottom left corner
                if(gameBoard.board[1][0].textContent == "O" && gameBoard.board[0][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[0][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[2][1].textContent == "O" && gameBoard.board[2][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "22"){//Now the bottom right corner
                if(gameBoard.board[2][1].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[0][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][2].textContent == "O" && gameBoard.board[0][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "01"){//Now the top middle
                if(gameBoard.board[0][0].textContent == "O" && gameBoard.board[0][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[2][1].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "12"){//Now the right middle
                if(gameBoard.board[0][2].textContent == "O" && gameBoard.board[2][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[1][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "21"){//Now the bottom middle
                if(gameBoard.board[2][2].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[0][1].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }else if(coordinates == "10"){//Now the left middle
                if(gameBoard.board[0][0].textContent == "O" && gameBoard.board[2][0].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }else if(gameBoard.board[1][1].textContent == "O" && gameBoard.board[1][2].textContent == "O"){
                    console.log("You win")
                    winner = true;
                }
            }
        }
    }
    return winner;
}

function opponentPlay(xPos,yPos){
    let newXPos = 0;
    let newYPos = 0;
    let player = 2;
    //Place depending on where the player last placed
    let legalMove = false;
    if(xPos == 0 && yPos == 0){
        let randomChoice = Math.floor(Math.random() * 3);
        if(randomChoice == 0){
            if(document.getElementById("01").textContent == ""){
                document.getElementById("01").textContent = "O";
                document.getElementById("01").style.pointerEvents = "none";
                newYPos = 1;
                newXPos = 0;
                legalMove = true;
            }
        }else if(randomChoice == 1){
            if(document.getElementById("11").textContent == ""){
                document.getElementById("11").textContent = "O";
                document.getElementById("11").style.pointerEvents = "none";
                newYPos = 1;
                newXPos = 1;
                legalMove = true;
            }
        }else{
            if(document.getElementById("10").textContent == ""){
                document.getElementById("10").textContent = "O";
                document.getElementById("10").style.pointerEvents = "none";
                newYPos = 1;
                newXPos = 0;
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
    if(!legalMove){
        let move = 1;
        while(move == 1){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(document.getElementById(i.toString()+j.toString()).textContent == ""){
                        document.getElementById(i.toString()+j.toString()).textContent = "O";
                        document.getElementById(i.toString()+j.toString()).style.pointerEvents = "none";
                        move = 2;
                        j = i = 3;
                    }
                }
            }
        }
    }

    //Check for winnerarray
    //checkWinner(player,xPos,yPos);

}