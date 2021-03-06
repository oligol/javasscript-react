// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello world!');
// }

// рекурсивный вызов setTimeout Правельно.

let timerId = setTimeout(function log() {
    console.log("Hello");
    setTimeout(log, 2000);
});

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



// Делегирование

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.classList.matches('button.first')) {
//         console.log("Hello!");
//     }
// });

let btnBlock = document.querySelector('.btn-block');

btnBlock.addEventListener('click', function(event) {
    let tar = event.target;

    if (tar.matches('button.first')) {
        console.log("Delegation of events");
        tar.style.backgroundColor = "red";
    }
});