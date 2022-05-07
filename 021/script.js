let box = document.querySelector('.box');
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);    
console.log(height);

// Координати елемента
console.log(box.getBoundingClientRect());

console.log(box.getBoundingClientRect().left);

// Координати елемента

// Ширина і висота документа

console.log(document.documentElement.clientWidth);

console.log(document.documentElement.clientHeight);


console.log(document.documentElement.scrollTop); //scroll
// Ширина і висота документа

// Прокрутка вгору елемента
btn = addEventListener('click', function() {
    box.scrollTop = 0;
});

// Прокрутка вгору елемента

// Прокрутка вгору сторінки

document.documentElement.scrollTop = 0;

// Прокрутка вгору сторінки


// Прокрутка по сторінці

scrollBy(0, 200);

scrollTo(0, 500);  
// Прокрутка по сторінці