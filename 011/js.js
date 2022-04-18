
function first(){
    setTimeout(function(){
        console.log(1);
    },500 );
}
function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}



learnJS("JavaScript", function(){
    console.log("Я проше 3й урок!");
});


/////////////////////////////
function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я проше 3й урок!");
}

learnJS("JavaScript", done  );
// /////////////////////////////
function first(one, callback){
    setTimeout(function(){
        console.log("Виводимо " + one);
    },500 );
    callback();
}
function second(){
    console.log(2);
}
first(1, second);
