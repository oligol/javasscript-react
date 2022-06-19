'use strict';


let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', function() {
    
    let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            let p = new Promise(function(resolve, reject) {
                if (request.readyState === 4 && request.status == 200) {
                    resolve('good');
                } else {
                    reject('no');
                }
            });
        p.then(function() {
            let data = JSON.parse(request.response);
                // console.log(data.usd);
                inputUsd.value = inputUah.value / data.usd;
        }).catch(function() {
            inputUsd.value = "error";
        });
    });    
});