// 1 перетворення в строку

// 1)

console.log(typeof(String(4)));

// 2) канкатенация

console.log("ww" + "err");

console.log("ww" + 5);

console.log(typeof(String("ww" + 5)));

// приклад

console.log('https://i.ua/catalog/' + 5);




// перетворення в числовий тип

// 1)

console.log(typeof(Number('5')));

// 2) Унарний плюс

console.log(typeof(5 + +"5"));

// 3)

console.log(typeof(parseInt('15px', 10)));


// Приклад в число

let ans = +prompt("Hello?", '');




// логічне перетворення


// 1)
// 0, "", null, underfined, Nan -  це false


let switcher = null;

if (switcher) {
    console.log("Working...");
}
//
switcher = 1;
if (switcher) {
    console.log("Working...");
}

// 2) 


console.log(typeof(Boolean('5')));


// 3)

console.log(typeof(!!"5"));