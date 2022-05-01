// touchstart
// touchhome
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // // 
    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // // 
    // });

    // box.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchmove");
    // });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });
    // координати по Х осі
    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });
    

    // // new RegExp('pattern', 'flags');
    // // /pattern/flags

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/g;

    
    
    // // search - слабкий 
    // // console.log(ans.search(reg));
    
    
    // // i Флаг Регістра
    // // g Глобальний
    // // m Багатострічковий


    // \d клас   цифри \D Не цифра
    // \w букви        \W Не буква
    // \s пробіли      \S Не пробіл
    // \/  \*   \% спеціальний символ

    // console.log(ans.match(reg));

    // // Заміна символів.

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ':'));

    // // Заміна символів.

    // let ans = prompt('Введите число');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/i));
    
});