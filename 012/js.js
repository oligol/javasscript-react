// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);

// options.bul = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bul;

// console.log(options);

// for (let key in options) {
//     console.log("Властивість " + key + " має значення " + options[key]);
// };

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5,];
// // arr[99] = 99;

// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // console.log(arr.length);


// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + "(масив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key in mass) { //ключ
//     console.log(key);
// }

// for (let key of mass) { //значення
//     console.log(key);
// }

// отримати данні від користувача
// let ans = prompt("", "");
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// відправити на сервер

let arr = ["aawe", "zas", "poe"],
    i =arr.join(", ");
    
    console.log(arr);
    console.log(i);


// сортування стрічок

let arr = ["aawe", "zas", "poe"],
    i =arr.sort();
    
    console.log(arr);

// сортування цифр


let arr = [1, 15, 4],
    i =arr.sort();
function compareNum(a,b) {
    return a-b;
}
    console.log(arr);

// OOP Прототип

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100,
};

john.__proto__ =soldier;

console.log(john);
console.log(john.armor);