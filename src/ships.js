class Ship {
    constructor(name,length) {
        this.name = name;
        this.length = length;
        this.hitsTaken = 0;
        this.sunken = false;
        this.direction= true; // true is horizontal, false is vertical
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
    toggleDirection() {
        if (!this.direction) return this.direction = true
        
        return this.direction = false
    }
}

module.exports = Ship