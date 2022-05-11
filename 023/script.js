
// 1)простий виклик функції



// // контекст визова самий простий приклад (function контекстом є window)
// function showThis() {
//     console.log(this);
// }
// showThis();
// //

// // контекст визова самий простий приклад (function контекстом в 'use strict'; є undefined)

// 'use strict';

// function showThis() {
//     console.log(this);
// }
// showThis();
// //


// // контекстом function в function є window також
// function showThis(a, b) {
//     console.log(this);
//         function sum () {
//             console.log(this);
//             return a + b;
//         }
//         console.log(sum());
//     }
// showThis(4, 5);
// showThis(5, 5);
// // 


// 2) в функції яка є методом об'єкта контекстом (this) буде об'єкт

// // 
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// // 

// // в функції, що є в середині фун7кції, яка є методом об'єкта контекстом (this) буде window/undefined

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function showt() {
//             console.log(this);
//         }
//         showt();

//     }
// };
// obj.sum();

// //

// // 3)в конструкторах (new) контекстом (this) є новостворений об'єкт

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     };

// };

// User.prototype.exit = function(name) {
//     console.log('пользователь ' + this.name + " ушел");
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// //


// 4) ручне присвоєння контексту (this) call apply - все що callб apply потрапляє в this

// // 
// let user = {
//     name:  "John"
// };

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }

// console.log(sayName.call(user));
// console.log(sayName.apply(user));

// // 

// //

// let user = {
//     name:  "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// console.log(sayName.call(user, 'Smith')); // передаємо у вигляді строки
// console.log(sayName.apply(user,  ['Snow'])); // передаємо у вигляді масива

// //


// // 4) ручне присвоєння контексту (this) bind - все що bind потрапляє в this

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(20));

// //

// контекстом this в DOM (на сторінці) є елемент на якому виконується подія(событие)
// але в функції яка є в середині функції контекстом (this) буде window/undefined

let bnt = document.querySelector('button');

bnt.addEventListener('click', function() {
    console.log(this);

    this.style.backgroundColor = "red";
    function showThis () {
        console.log(this);
    }

});