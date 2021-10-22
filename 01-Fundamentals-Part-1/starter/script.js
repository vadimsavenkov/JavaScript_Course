/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = 'Vlad';
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof 'Vadim');

javascriptIsFun = 'YES';
console.log(javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


//mutate variable
let age = 30;
age = 31;

// immutable variable
const birthYear = 1991;
birthYear = 1990;

// var is an old way to define variable
var job = 'programmer';
job = 'teacher';

//never use var!

lastName = 'Savenkov';
console.log(lastName);

//you should always declare variable!

//math operators
const now = 2050;
const ageVadim = now - 2000;
const ageVlad = now - 2035;
console.log(ageVadim);

console.log(ageVadim / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Vadim';
const lastName = 'Savenkov'
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x +1
console.log(x);

//comparison operators
console.log(ageVadim > ageVlad);
console.log(ageVlad >= 18);


//operator precedence
const now = 2050;
const ageVadim = now - 2000;
const ageVlad = now - 2035;

console.log(now - 2000 > now - 2035);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageVadim + ageVlad) / 2;
console.log(averageAge);

// first code challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

//strings
const firstName = 'Vadim';
const job = 'engineer';
const startYear = 1994;

const me = firstName + ' started his job as an ' + job + ' in ' + startYear;
console.log(me);

//template literals using back ticks
const meAgain = `${firstName} started his job as an ${job} in ${startYear}`;
console.log(meAgain);

//convinient way to do multiple lines instead of \n\
console.log(`String
with multiple
lines`);

//if/else statements
//control structure examples
const age = 15;

if (age >= 18) {
    console.log(`Sarah can have her driver's license!`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. She should wait another ${yearsLeft} years!`)
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// second code challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 120;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
} else {
    console.log(`Mark's BMI(${bmiMark}) is lower than John's(${bmiJohn})!`)
}

//time conversion

//convert string to number
const inputYear = '1971';
//convert to a number
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
//convert to a string
console.log(String(18), 18);

//type coersion
console.log('I am ' + 50 + ' years old');

let n = '1' + 1; // 11 plus operator convert to a string
n = n - 1;
console.log(n); // 10 minus operator convert to a number

//5 falsy numberd 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Vadim')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 1;
if (money) {
    console.log("Don't spend in all!");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Hight is defined!');
} else {
    console.log('Hight is undefined!');
}

// == vs === strict equality operator
const age = 18;
if (age === 18) console.log('You are an adult!(strict)');

if (age == 18) console.log('You are an adult!(loose)');

const favorite = Number(prompt('What is you favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is a nice number!');
} else if (favorite === 7) { // 23 === 23
    console.log('7 is also nice number!');
} else {
    console.log('Common! Number is not 23 or 7!')
}

// not equiality operator

if (favorite !== 23) { // 23 === 23
    console.log('What?! Why this number is not 23?');
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // and operator

console.log(hasDriversLicense || hasGoodVision); // or operator

console.log(!hasDriversLicense); // not operator

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('I am able to drive!');
// } else {
//     console.log('Someone else will drive!');
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('I am able to drive!');
} else {
    console.log('Someone else will drive!');
}



// third code challenge

const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoallas = (88 + 100 + 110) / 3;
console.log(averageScoreDolphins, averageScoreKoallas);


if (averageScoreDolphins > averageScoreKoallas) {
    console.log('Dolphins is the winner!');
} else if (averageScoreDolphins < averageScoreKoallas) {
    console.log('Koalas is the winner!');
} else if (averageScoreKoallas === averageScoreDolphins) {
    console.log('It is a draw!');
}

const averageScoreDolphins = (89 + 95 + 123) / 3;
const averageScoreKoallas = (89 + 95 + 123) / 3;
const minimumScore = 100;
console.log(averageScoreDolphins, averageScoreKoallas);

if (averageScoreDolphins > averageScoreKoallas && averageScoreDolphins > minimumScore) {
    console.log('Dolphins is the winner!');
} else if (averageScoreDolphins < averageScoreKoallas && averageScoreKoallas > minimumScore) {
    console.log('Koalas is the winner!');
} else if (averageScoreKoallas === averageScoreDolphins && averageScoreKoallas === minimumScore && averageScoreDolphins === minimumScore) {
    console.log('It is a draw!');
} else {
    console.log('Nobody wins!')
}

*/

const day = 'Saturday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Going to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepaire theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}