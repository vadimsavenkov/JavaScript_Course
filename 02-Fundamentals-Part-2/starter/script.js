/*
//strict mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

//strict mode reserves some words

//const interface = 'Audio';
//const private = 534;

function logger() {
    console.log('My name is Vadim!')
}
//calling, running or invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
// save it to variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//the simplier way
console.log(fruitProcessor(5, 0));

//re-use function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//converting string to a number using built-in function

const num = Number('25');
console.log(num);

//another example of function declaration. You can call it before defining
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1)
//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2)

*/

