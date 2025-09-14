const Ship = require("../ships")

test('Does the Ship class return the correct object', () => {
    expect(new Ship('carrier',5)).toEqual({
        name:'carrier',
        length:5,
        hitsTaken:0,
        sunken:false
    })
})
test('hit method should increment by 1', () => {
    let sub = new Ship('submarine',3)
    sub.hit()
    sub.hit()
    expect(sub.hitsTaken).toEqual(2)
})
test('isSunk method should alert when reaching max hits', () => {
    let sub = new Ship('submarine',3)
    sub.hit()
    sub.hit()
    sub.hit()
    expect(sub.sunken).toEqual(false)
})