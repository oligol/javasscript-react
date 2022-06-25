// try {
//     console.log('Начинаем работу');
//     console.log(a);
//     console.log('Результат');
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log('Мы получили ошибку: ' + error.name);
// }

// console.log('А я буду работать дальше');

// // 
// let json = '{"id": 2}';

// try{
//     let user = JSON.parse(json);
//     console.log(user);

//     let secondUser = JSON.parse(data);
//     console.log(secondUser);
// } catch (er) {
//     console.log('Мы получили ошибку: ' + er.name);
// }

// // 
let json = '{"id": 2}';

try{
    let user = JSON.parse(json);
    console.log(user);

    if(!user.name) {
        throw new Error ("В этих данных нет имени...");
        
    }
} catch (err) {
    console.log('Мы получили ошибку: ' + err.name);
} finally {
    console.log("Я выполнюсь всегда");
}