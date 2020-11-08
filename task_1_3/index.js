"use strict";

// проверка уникальности имени точки
function checkUniqeName(name, points) {
    for (let i = 0; i < points.length; i++) {
        if (points[i].name === name) {
            return false;
        }
    }
    return true;
}

// создание точки
function Create(pointName, pointX, pointY, points) {
    if (checkUniqeName(pointName, points)) {
        points.push( {
            name: pointName, 
            x: pointX,
            y: pointY
        });
    }
    else {
        console.log("Not create point" + pointName + " because already exist")
    }
}

// чтение информации точки
function Read(point) {
    console.log(point);
}

// чтение информации точек
function ReadAll(points) {
    for (let i = 0; i < points.length; i++) {
        Read(points[i]);
    }
}

// обновить имя точки
function UpdateName(newName, point) {
    point.name = newName;
}

// обновить абсциссу точки
function UpdateX(newX, point) {
    point.x = newX;
}

// обновить ординату точки
function UpdateY(newY, point) {
    point.y = newY;
}

// обновить все данные о точки
function UpdateALLParametrs(newName, newX, newY, point) {
    UpdateName(newName, point);
    UpdateX(newX, point);
    UpdateY(newY, point);
}

// удалить точку
function Delete(name, points) {
    for (let i = 0; i < points.length; i++) {
        if (points[i].name === name) {
            points.splice(i,1);
            return;
        }
    }
}

// расстояние между двумя точками
function DistancePoint(pointA, pointB) {
    let dx = pointB.x - pointA.x;
    let dy = pointB.y - pointA.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// получение двух точек, между которыми наибольшее расстояние
function FindPointWithMaxDistance(points) {
    let mdist = 0;
    let findPoint = [];
    let dist;
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            dist = DistancePoint(points[i], points[j]);
            if (dist > mdist) {
                findPoint = [];
                findPoint.push([points[i],points[j]]);
                mdist = dist;
            } else if (dist == mdist) {
                findPoint.push([points[i],points[j]]);
            }
        }
    }
    return findPoint;
}

// получение точек, находящихся от заданной точки на расстоянии, не превышающем заданную константу
function FindPointWithDistanceSetPoint(setPoint, setDist, points) {
    let findPoint = [];
    for (let i = 0; i < points.length; i++) {
        if (points[i] != setPoint) {           
            if (DistancePoint(points[i], setPoint) <= setDist) {
                findPoint.push(points[i]);
            }
        }
    }
    return findPoint;
}

// получение точек, находящихся выше / ниже оси абсцисс
function FindPointFromAxisOx(setDirection, points) {
    let findPoint = [];
    if (setDirection === "above" || setDirection === "below") {
        for (let i = 0; i < points.length; i++) {
            if (setDirection === "above") {
                if (points[i].y > 0) {
                    findPoint.push(points[i]);
                }
            } else {
                if (points[i].y < 0) {
                    findPoint.push(points[i]);
                }
            } 
        }
    } else {
        console.log("incorrect direction");
    }
    return findPoint;
}

// получение точек, находящихся левее / правее оси ординат
function FindPointFromAxisOy(setDirection, points) {
    let findPoint = [];
    if (setDirection === "left" || setDirection === "right") {
        for (let i = 0; i < points.length; i++) {
            if (setDirection === "left") {
                if (points[i].x < 0) {
                    findPoint.push(points[i]);
                }
            } else {
                if (points[i].x > 0) {
                    findPoint.push(points[i]);
                }
            } 
        }
    } else {
        console.log("incorrect direction");
    }
    return findPoint;
}

// получение точек, входящих внутри заданной прямоугольной зоны
// прямоугольник задается точкой нижнего левого угла, шириной и высотой
function inRectangle(x, y, width, height, points) {
    let findPoint = [];
    for (let i = 0; i < points.length; i++) {
        if (points[i].x > x && points[i].x < (x + width) && points[i].y > y && points[i].y < (y + height)) {
            findPoint.push(points[i]);
        } 
    }
    return findPoint;
}

let points = [];

console.log("Creating");
Create("one", -1, 1, points);
Create("two", 1, 1, points);
Create("three", 1, -1, points);
Create("two", -1, -1, points);
Create("our", -10, -10, points);
Create("five", 0, 0, points);
Create("six", 0, 0, points)
ReadAll(points);

console.log("\nDeleting five point");
Delete("five", points);
ReadAll(points);

console.log("\nUpdate our point");
Read(points[3]);
UpdateALLParametrs("four", -1, -1, points[3]);
Read(points[3]);

console.log("\nFind point with max distance");
console.log(FindPointWithMaxDistance(points));

console.log("\nFind point with set distance");
console.log("set distanse 5:");
console.log(FindPointWithDistanceSetPoint(points[3], 5, points));
console.log("set distanse 2:");
console.log(FindPointWithDistanceSetPoint(points[3], 2, points));


console.log("\nFind point above from axis OX");
console.log(FindPointFromAxisOx("above", points));
console.log("\nFind point below from axis OX");
console.log(FindPointFromAxisOx("below", points));
console.log("\nFind point left from axis OY");
console.log(FindPointFromAxisOy("left", points));
console.log("\nFind point right from axis OY");
console.log(FindPointFromAxisOy("right", points));

console.log("\nCheck if incorrect direction")
console.log(FindPointFromAxisOy("gvgvg", points));
console.log(FindPointFromAxisOx("gvgvg", points));


console.log("\nCheck in Rectangle");
console.log(inRectangle(-2, -2, 5, 5, points));
console.log(inRectangle(-1, -1, 2, 2, points));
console.log(inRectangle(-0.5, -0.5, 0.1, 0.1, points));
