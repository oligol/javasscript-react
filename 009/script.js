let num = 50;

// 1) Спосіб


// while (num < 55) { //поки num менше ніж 55 то виконується те що в { ... }
//    console.log(num);
//    num++;
// }

// 2) Спосіб

do {                 // спочатку зробити те що в { ... }
    console.log(num);
    num++;
}
while (num < 55); // , а потім перевірити 


// 3) Спосіб

for (let i = 1; i < 8; i++) {
    console.log(i);
}

// якщо потрібно закінчити раніше ніж вказано в умові


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
    console.log(i);
}


// якщо потрібно пропустити якесь значенн вказано в умові

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}