let box = document.querySelector('.box');
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

// console.log(width);    
// console.log(height); 



// Прокрутка вгору сторінки
btn = addEventListener('click', function() {
    box.scrollTop = 0;
});

// Прокрутка вгору сторінки