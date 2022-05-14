// стрілочна функція завжди анонімна

let fun = () => {
    console.log(this);
};

fun();
//а

// стрілочна функція контекст бере в батка
let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }

};

obj.sayNumber();

//


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
        this.style.backgroundColor = "red";
    };
    show();
});