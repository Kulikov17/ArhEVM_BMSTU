"use strict";

class Point {
    constructor(x,  y) {
        this.x = x;
        this.y = y;
    }

    renderFields() {
        let messageX = "X: " + this.x;
        let messageY = "Y: " + this.y;
        let fullMessage = messageX + "\n" + messageY;
        console.log(fullMessage);
    }
}

class Cut {
    constructor(x1, y1, x2, y2) {
        this.begin = new Point(x1, y1);
        this.end = new Point(x2, y2);
    }

    renderFields() {
        let messageBegin = "Begin point:\nX: " + this.begin.x + " "+"Y: " + this.begin.y;
        let messageEnd = "End point:\nX: " + this.end.x + " "+"Y: " + this.end.y;
        let fullMessage = messageBegin + "\n" + messageEnd;
        console.log(fullMessage);
    }

    getLengthCut() {
        let dx = this.end.x - this.begin.x;
        let dy = this.end.y - this.begin.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let point = new Point(3.5, 4);
point.renderFields();

let cut = new Cut (0, 0, 6, 8); 
cut.renderFields();

let lengthCut = cut.getLengthCut();
console.log("Length cut is ", lengthCut);