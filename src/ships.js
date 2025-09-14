class Ship {
    constructor(name,length) {
        this.name = name;
        this.length = length;
        this.hitsTaken = 0;
        this.sunken = false;
    }
    hit() {
        if (this.isSunk()) {
            alert('This ship has been sunk!')
        } else
            this.hitsTaken++
    }
    isSunk() {
        if (this.hitsTaken === this.length) {
            this.sunken = true;
            alert('This ship has been sunk!')
        }
        return this.sunken;
    }
}

module.exports = Ship