"use strict";

// импорт библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5002;
app.listen(port);
console.log("Server on port " + port);

// заголовки для ответа
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// загрузка тела
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}

// приём запроса
app.post("/insert/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const car = obj.car;
        const price = obj.price;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let obj1 = [];
        if (contentString != '') {
            obj1 = JSON.parse(contentString);
        }
        obj1.push({"car": car, "price": price})
        contentString = JSON.stringify(obj1);
        fs.writeFileSync("./file.txt", contentString);
        response.end(JSON.stringify({
            answer: "car was added"
        }));
    });
});

// приём запроса
app.post("/select/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const price = obj.price;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let answerString = 'Not this car';
        if (contentString != '') {
            let obj1 = JSON.parse(contentString);
            for (let i = 0; i < obj1.length; i++) {
                if (obj1[i].price == price) {
                    answerString = `car: ${obj1[i].car} price: ${obj1[i].price}`;
                    break;
                }
            }
        }
        response.end(JSON.stringify({
            answer: answerString
        }));
    });
});