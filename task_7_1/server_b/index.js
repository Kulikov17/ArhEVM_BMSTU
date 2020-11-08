"use strict";

// импорт библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5000;
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
        const warehouse = obj.warehouse;
        let arrCar = obj.arrCar;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let obj1 = [];
        if (contentString != '') {
            obj1 = JSON.parse(contentString);
        }
        arrCar = arrCar.split(",");
        obj1.push({"warehouse": warehouse, "arrCar": arrCar})
        contentString = JSON.stringify(obj1);
        fs.writeFileSync("./file.txt", contentString);
        response.end(JSON.stringify({
            answer: "warehouse was added"
        }));
    });
});

// приём запроса
app.post("/select/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const warehouse = obj.warehouse;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let answerString = 'Not this warehouse';
        if (contentString != '') {
            let obj1 = JSON.parse(contentString);
            for (let i = 0; i < obj1.length; i++) {
                if (obj1[i].warehouse == warehouse) {
                    answerString = `cars:`;
                    for (let j = 0; j < obj1[i].arrCar.length; j++) {
                        if (j != obj1[i].arrCar.length - 1) {
                            answerString += `${obj1[i].arrCar[j]},`;
                        } else {
                            answerString += `${obj1[i].arrCar[j]}`;
                        }
                    }
                    break;
                }
            }
        }
        response.end(JSON.stringify({
            answer: answerString
        }));
    });
});