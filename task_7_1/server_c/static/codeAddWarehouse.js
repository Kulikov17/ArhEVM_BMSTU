"use strict";

window.onload = function() {
    // input fields
    const warehouse = document.getElementById("field-warehouse");
    const arrCar = document.getElementById("field-array-car");
    const btn = document.getElementById("btn-send");

    // ajax get
    function ajaxGet(urlString, callback) {
        let r = new XMLHttpRequest();
        r.open("GET", urlString, true);
        r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        r.send(null);
        r.onload = function() {
            callback(r.response);
        };
    };

    // click event
    btn.onclick = function() {
        const w = warehouse.value;
        const ac = arrCar.value;
        const url = `/addWarehouse?warehouse=${w}&arrCar=${ac}`;
        ajaxGet(url, function(stringAnswer) {
            alert(stringAnswer);
        });
    };

}