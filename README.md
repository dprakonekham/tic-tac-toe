# tic-tac-toe

Tic-tac-toe game using HTML, CSS, and JavaScript. Created using a 3x3 grid of divs each with an event listener that changes the text content to "X" upon clicking. The grid elements are also stored in a 2D array relative to their location which is also tied to their ID. For example, the middle grid element in the 2D array is denoted [1,1], therefore it can be accessed through its ID, which is 11. This is important because by getting the ID of the grid element that was clicked, we were able to ascertain it's array location and this brings us to the function called checkWinner. Each time a cell is clicked, the function checkWinner is called which checks for winning combinations using last move you or your opponent played. If you played the middle cell, it would check the text content diagonally or vertically if you had 3 Xs in a row and if you did, you won. If you won, a screen will popup congratulating you on your win, otherwise it will tell you if you lose or tied.
