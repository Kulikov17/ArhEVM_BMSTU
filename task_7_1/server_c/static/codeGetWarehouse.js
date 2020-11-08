"use strict";

window.onload = function() {
    // input fields
    const warehouse = document.getElementById("field-warehouse");
    const btn = document.getElementById("btn-send");

    // label
    const label = document.getElementById("result-label");

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
        const url = `/getWarehouse?warehouse=${w}`;
        ajaxGet(url, function(stringAnswer) {
            label.innerHTML = `${stringAnswer}`;
        });
    };
}