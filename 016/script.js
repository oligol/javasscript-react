let box = document.getElementById("box"),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[2]);
// console.log(oneHeart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });


let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.appendChild(div);

// wrapper.appendChild(div); // вставить в конец

//div.innerHTML = '<h1>Hello World!</h1>' // добаить текст

div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]); // вставить после
document.body.removeChild(circle[1]); // удалить элемент 
document.body.replaceChild(btn[1], circle[1]); //заменить элемент



console.log(div);
console.log(text);
