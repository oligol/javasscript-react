let btn = document.querySelectorAll('button');
    wrap = document.querySelector('.wrapper');
    link = document.querySelector('a');

// //не зручний варіант
// btn[0].onclick = function() {
//     alert('Вы нажали на первую кнопку');
// };

// btn[0].onclick = function() {
//     alert('Вы опять нажали на первую кнопку');
// };

// // зручныший варыант

// btn[0].addEventListener('click', function() {
//     alert('Вы нажали на первую кнопку');
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали на первую кнопку');
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });

// btn[0].addEventListener('click', function(event) {
//     console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
// });


// // remove element

// btn[0].addEventListener('click', function(event) {
//     console.log(event);
//     let target = event.target;
//     target.style.display = 'none';
// });

// // 

// // event bubbling


// btn[0].addEventListener('click', function(event) {
//     console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
// });

// відміна стандартного поводження браузера 
// відправка без перезавантаження сторінки
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + " на элементе " + event.target);
});


// Перебор элементов
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("Вышли!");
    });
});