"use strict";

window.onload = function() {
    // input fields
    const car = document.getElementById("field-car");
    const price = document.getElementById("field-price");
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
        const c = car.value;
        const p = price.value;
        const url = `/addCar?car=${c}&price=${p}`;
        ajaxGet(url, function(stringAnswer) {
            alert(stringAnswer);
        });
    };

}