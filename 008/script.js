// якщо


if (2*4 == 9) { // в дужках перетворюється в булінове значення.
    console.log("Правда");
} else {
    console.log("Wrong");
}


let num = 50;

// if (num < 49) {
//     console.log("Не верно");
// } else if(num > 100) {
//     console.log("Много");
// } else {
//     console.log("Верно");
// };


// (num == 50) ? console.log('Верно!') : console.log('Неверно!');


// // switch

switch (num) {
    case num <49:
        console.log("Wrong");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Еще Много");
        break;
    case 50: // num == 50: не правельний запис
        console.log("Верно");
        break;
    default:
        console.log("Чтото пошло не так");
        break;
}