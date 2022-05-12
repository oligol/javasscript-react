// // 3 використання var. var є одна на весь цикл.


// function makeArray() {
//     var items = [];

//     for (var i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }
//     return items;
// }
// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// //

// 3 використання let. let створюэться кожни раз нова на протязы всього циклу.


function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}
var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

//