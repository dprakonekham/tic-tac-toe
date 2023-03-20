const gameContainer = document.getElementById("game-container")
const gameBoard = (function () {
    //Creates a 3x3 board
    const createBoard = () => {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const gridElement = document.createElement("grid-" + i.toString() + j.toString());
                gridElement.style.display = "flex";
                gridElement.style.alignItems = "center";
                gridElement.style.justifyContent = "center";
                gridElement.style.backgroundColor = "black";
                gridElement.style.color = "white";
                gridElement.style.border = "1px solid green";
                //Add event listener to all of the elements
                gridElement.addEventListener(`click`, function(e){
                    gridElement.textContent = "x";
                });
                gameContainer.appendChild(gridElement);         
            }
        }
    }
    return{createBoard}
})();

gameBoard.createBoard();

const resetButton = document.getElementById("rButton");
resetButton.addEventListener(`click`, function(e){
    //For every child of gameContainer, set the text content of every node to empty
    var children = gameContainer.children;
    for(let i = 0; i < children.length; i++){
        children[i].textContent = " ";
    }
});
