class Rectangle {
    constructor(height, widht) {
        this.height = height;
        this.widht = widht;
    }
    calcArea() {
        return this.height * this.widht;
    }
}

const square = new Rectangle(10,10);
console.log (square.calcArea());