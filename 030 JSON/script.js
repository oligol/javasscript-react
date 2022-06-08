// // JSON

// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };


// console.log(JSON.stringify(options)); //( вивантаження - stringify)


// console.log(JSON.parse(JSON.stringify(options))); //( завантаження - parse)


// // 

let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');


inputUah.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(); 
    // 1 method (найчастіше GET, POST), 2 url (шлях до БД), 3 async (асинхронність, true fals), login, pass

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charterset=utf-8');
    request.send();


    // // властивості XMLHttpRequest 
    // 1. status
    // 2. statusTaxt
    // 3. responseText
    // 4. readyState (UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE)


    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputUah.value / data.usd;
        } else {
            inputUsd.value = "error"; 
        }
    });

});