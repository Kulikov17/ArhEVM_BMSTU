"use strict";

class Triangle {
    constructor(a,  b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    renderFields() {
        let messageA = "A: " + this.a;
        let messageB = "B: " + this.b;
        let messageC = "C: " + this.c;
        let fullMessage = messageA + "\n" + messageB + "\n" + messageC;
        console.log(fullMessage);
    }

    isTriangle() {
        if ((this.a + this.b > this.c) && (this.a + this.c > this.b) && (this.c + this.b > this.a)) {
            return true;
        }
        return false;
    }

    isHypotenuse(leg1, leg2, hypotense) {
        if ((leg1 * leg1 + leg2 * leg2) == hypotense * hypotense) {
            return true;
        }
        return false;
    }

    isRectangular() {
        if (this.isTriangle()) {
            let tmp = Math.max(this.a, this.b, this.c);
            if (tmp == this.a) {
                return this.isHypotenuse(this.b, this.c, tmp);
            } else if (tmp == this.b) {
                return this.isHypotenuse(this.a, this.c, tmp);
            } else {
                return this.isHypotenuse(this.a, this.b, tmp);
            }
        }
        return NaN;
    }

    getPerimetr() {
        if (this.isTriangle()) {
            return this.a + this.b + this.c;
        }
        return NaN;
    }

    getSquare() {
        if (this.isTriangle()) {
            let p = this.getPerimetr() / 2;
            return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        }
        return NaN;
    }


}

let triangle = new Triangle(3, 4, 5);
let triangle1 = new Triangle(-3, 4, 5);
console.log("Data: 3, 4, 5");
console.log("Is it triangle?");
console.log(triangle.isTriangle());
console.log("Perimetr = ");
console.log(triangle.getPerimetr());
console.log("Square = ");
console.log(triangle.getSquare());
console.log("Is it rectangular triangle?");
console.log(triangle.isRectangular());

console.log("Data: -3, 4, 5");
console.log("Is it triangle?");
console.log(triangle1.isTriangle());
console.log("Perimetr = ");
console.log(triangle1.getPerimetr());
console.log("Square = ");
console.log(triangle1.getSquare());
console.log("Is it rectangular triangle?");
console.log(triangle1.isRectangular());

let triangle2 = new Triangle(32, 28, 39);
console.log("Data: 32, 28, 39");
console.log("Is it triangle?");
console.log(triangle2.isTriangle());
console.log("Is it rectangular triangle?");
console.log(triangle2.isRectangular());