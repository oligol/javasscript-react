// ES5

function calcOrDouble(number, basis) {
    basis = basis || 2;
    console.log(number*basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);


// ES6
function calcOrDouble(number, basis = 2) {

    console.log(number*basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);
