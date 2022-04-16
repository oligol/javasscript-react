let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bul = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bul;

console.log(options);

for (let key in options) {
    console.log("Властивість " + key + " має значення " + options[key]);
};

console.log(Object.keys(options).length);