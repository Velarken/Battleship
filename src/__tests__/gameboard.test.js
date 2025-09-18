const Gameboard = require('../gameboard')
const Ship = require('../ships')

test('gameboard inits with empty grid and input playerName', () => {
    let gameboard = new Gameboard()
    expect(gameboard.grid).toEqual(
        [
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null]
        ]
    )
})
test('marked spaces should change from null to true when hitting a ship, fasle otherwise', () => {
    let mathius = new Gameboard('mathius')
    mathius.receiveAttack(0,0,true) // hit ship
    mathius.receiveAttack(2,7,false) // miss
    expect(mathius.grid).toEqual(
        [
            [true,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,'o',null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null]
        ]
    )
})
test('if a space is marked and is fired on again, alert', () => {
    let mathius = new Gameboard('mathius')
    mathius.receiveAttack(0,0)
    expect(mathius.receiveAttack(0,0)).toBe('You have attacked this space already!');
})
test('gameboard generates fleet of ships into an object', () => {
    let gameboard = new Gameboard('mathius')
    gameboard.createShips()
    expect(gameboard.ships).toEqual([
        {name:'carrier',length:5,hitsTaken:0,sunken:false,direction:true},
        {name:'battleship',length:4,hitsTaken:0,sunken:false,direction:true},
        {name:'destroyer',length:3,hitsTaken:0,sunken:false,direction:true},
        {name:'submarine1',length:3,hitsTaken:0,sunken:false,direction:true},
        {name:'submarine2',length:3,hitsTaken:0,sunken:false,direction:true},
        {name:'patrol1',length:2,hitsTaken:0,sunken:false,direction:true},
        {name:'patrol2',length:2,hitsTaken:0,sunken:false,direction:true},
        {name:'patrol3',length:2,hitsTaken:0,sunken:false,direction:true}
        ])
})
test('if all ships are sunk, return true', () => {
    let gameboard = new Gameboard('mathius');
    gameboard.createShips();
    let ships = gameboard.ships
    ships.forEach((ship) => {
        ship.sunken = true;
    })

    expect(gameboard.gameOver()).toEqual(true)
})
test('if 1 ship remains unsunk, return false', () => {
    let gameboard = new Gameboard('mathius');
    gameboard.createShips();
    let ships = gameboard.ships
    for (let i = 0; i <ships.length -1;i++) {
        ships[i].sunken = true
    }
    expect(gameboard.gameOver()).toEqual(false)
})