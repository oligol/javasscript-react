window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

// 

// Приховуємо усі пункти крім першого

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
// 

// Показує конкретний пункт
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

// 

// Опрацьовує клік на меню і показує той чи інший пункт
    info.addEventListener('click', function(event) {
        let target = event.target;
        
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    }); 

// 



// timer

    let deadLine = '2022-06-15';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)));
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds,
            };
            
            
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }
    setClock('timer', deadLine);

    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    more.addEventListener('click', function() {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //прокрутка сторінки вимк

    });
    close.addEventListener('click', function() {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; //прокрутка сторінки увім
    });


    // Form PHP standart

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы c вами свяжемся!',
        failure: 'Что-то пошло не так...!',
    };
    let forms = document.querySelectorAll('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        forms.forEach(form => { 
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form);
                request.send(formData);

                request.addEventListener('readystatechange', function() {
                    let promise = new Promise(function(resolve, reject) {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200){
                            resolve();
                            
                            } else {
                                reject();
                            }
                        }
                    });
                    function clearInput() {
                        for (let i = 0; i < input.length; i++) {
                            input[i].value = '';
                        }
                    }
                    
                    promise.then(() => 
                        statusMessage.innerHTML = message.loading
                    ).then(() => 
                        statusMessage.innerHTML = message.success
                    ).catch(() => 
                        statusMessage.innerHTML = message.failure
                    ).then(clearInput);
                });

            }); 
        });


    // form JSON

    // let message = {
    //     loading: 'Загрузка',
    //     success: 'Спасибо! Скоро мы c вами свяжемся!',
    //     failure: 'Что-то пошло не так...!',
    // };
    // let forms = document.querySelectorAll('.main-form'),
    //     input = document.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    // statusMessage.classList.add('status');

    // forms.forEach(form => {
    //     form.addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         form.appendChild(statusMessage);
    
    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         // edit etRequestHeader
    //         request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
    
    //         let formData = new FormData(form);
    //         // add object empty and edit next strings
    //         let obj = {};
    //         formData.forEach(function(value, key) {
    //             obj[key] = value;    
    //         });
    
    //         let json = JSON.stringify(obj);
    
    //         request.send(json);
    
    //         // add object empty and edit
    
    //         request.addEventListener('readystatechange', function() {
    //             let promise = new Promise(function(resolve, reject) {
    //                 if (request.readyState < 4) {
    //                     resolve();
    //                 } else if (request.readyState === 4) {
    //                     if (request.status == 200){
    //                     resolve();
                        
    //                     } else {
    //                         reject();
    //                     }
    //                 }
    //             });
                
    //             function clearInput() {
    //                 for (let i = 0; i < input.length; i++) {
    //                     input[i].value = '';
    //                 }
    //             }
                
    //             promise.then(() => 
    //                 statusMessage.innerHTML = message.loading
    //             ).then(() => 
    //                 statusMessage.innerHTML = message.success
    //             ).catch(() => 
    //                 statusMessage.innerHTML = message.failure
    //             ).then(clearInput);
    //         });
    //     });
    // });  
    
    // slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWarp = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    
        showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex =1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentsSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWarp.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentsSlide(i);
            }
        }
    });
    
});