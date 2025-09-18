import "./styles.css"
const Gameboard = require('./gameboard')

let startGame = document.getElementById('startGame');

startGame.addEventListener('click', () => {
    let newGame = new Gameboard();
    newGame.createShips()

    function generateBoards(targetID) {
        for (let i = 0; i < 100; i++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('grid-square')
            let gameboard = document.getElementById(targetID);
            gameboard.appendChild(newSquare)
        }
    }
    // generate player boards
    generateBoards('playerBoard')
    generateBoards('enemyBoard')
})