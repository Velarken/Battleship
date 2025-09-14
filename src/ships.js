export class Ship {
    constructor(name,length) {
        this.name = name;
        this.length = length;
        this.hitsTaken = 0;
        this.sunken = false;
    }
    hit() {
        this.hitsTaken++
    }
    isSunk() {
        if (this.hitsTaken === this.length) {
            this.sunken = true;
        }
    }
}

module.exports = Ship