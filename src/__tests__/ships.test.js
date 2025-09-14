const Ship = require("../ships")

test('Does the Ship class return the correct object', () => {
    expect(new Ship('carrier',5)).toEqual({
        name:'carrier',
        length:5,
        hitsTaken:0,
        sunken:false
    })
})
