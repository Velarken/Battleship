const Ship = require('./ships')

class Gameboard {
    constructor() {
        this.ships = [];
        this.grid = Array(10).fill(null).map(() => Array(10).fill(null));
    }
    receiveAttack(row,col,isHit) {
        // null if unattacked, true if isHit, false if !isHit
        if (isHit) {
            if (this.grid[row][col] === null) {
                this.grid[row][col] = true;
            } else {
                return 'You have attacked this space already!'
            }
        } else if (!isHit) {
            if (this.grid[row][col] === null) {
                this.grid[row][col] = 'o';
            } else {
                return 'You have attacked this space already!'
            }
        }
    }
    createShips() {
        let ship = (x,y) => new Ship(x,y)
        this.ships = [
          ship('carrier',5), ship('battleship',4), ship('destroyer',3),ship('submarine1',3),
          ship('submarine2',3),ship('patrol1',2),ship('patrol2',2),ship('patrol3',2)
        ]
    }
    gameOver() {
        function checkSunken(ship) {
            return ship.sunken
        }
        return this.ships.every(checkSunken)
    }
    // placeShips(type,row,col) {
        /* 
            If placing a vertical ship
            -  column will be constant
            -  rows will increment by 1 from the starting coordinate
            -  for (let x=0; x<ship.length;x++) {
                  gameboard.grid[row + x][col] = whatever denotes space is occupied
               }

            If placing a horizontal ship
            -  row will be constant
            -  columns will increment by 1 from the starting coordinate
            -  for (let x=0; x<ship.length;x++) {
                  gameboard.grid[row][col + x] = whatever denotes space is occupied
               }
        */
    //}
};

module.exports = Gameboard