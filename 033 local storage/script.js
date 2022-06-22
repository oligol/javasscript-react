// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function() {

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form =document.getElementsByTagName('form')[0];

    if(localStorage.getItem("isCheked") === "true") {
        checkbox.checked = true;
    }

    if(localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#ff4766";
    }
    checkbox.addEventListener('click', function() {
        localStorage.setItem("isCheked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', "changed");
        form.style.backgroundColor = "#ff4766";
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ['mobile', 'notebook']
    };

    let serialaizePersone =JSON.stringify(persone);
    localStorage.setItem("Alex", serialaizePersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));
});