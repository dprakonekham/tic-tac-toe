const gameContainer = document.getElementById("game-container")
const gameBoard = (function () {
    //Creates a 3x3 board
    const createBoard = () => {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const gridElement = document.createElement("grid-" + i.toString() + j.toString());
                gridElement.style.backgroundColor = "black";
                gridElement.style.border = "thick solid purple";
                gridElement.style.color = "white";

                //Add event listener to all of the elements
                gridElement.addEventListener(`click`, function(e){
                    gridElement.textContent = "x";
                })
                gameContainer.appendChild(gridElement);         
            }
        }
    }
    return{createBoard}
})();

gameBoard.createBoard();
