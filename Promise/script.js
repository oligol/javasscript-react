'use strict';

    let myPromise = new Promise ((resolve, reject) => {

        let connection = true;
        // let connection = false;

        if (connection) {
            resolve('Connection esteblished');
        } else {
            reject ('Connection refused');
        }
    });
    
    myPromise.then((mesege) => {
        console.log(mesege);
    }).catch((mesege) => {
        console.log(mesege);
    });
    