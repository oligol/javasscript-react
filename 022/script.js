// // ES5


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

// // ES5


// ES6

class User {
    constructor (name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log('Hello! ' + this.name );
    }
    exit() {
        console.log('Пользователь ' + this.name, 'ушел');
    }
}
let ivan = new User('Ivan', 25),
     alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.exit();

// ES6

