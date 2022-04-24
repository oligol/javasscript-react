let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    nav = document.getElementsByTagName('nav'),
    promp = document.querySelector('.prompt'),
    adv = document.querySelector('.adv'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    question = document.getElementById('prompt'),
    answer = prompt("Ваше отношение к технике apple?", "");


menu.insertBefore(menuItem[2], menuItem[1]);
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
menu.appendChild(li);
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();
question.textContent = answer;