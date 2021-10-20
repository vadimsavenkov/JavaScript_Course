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

*/

//convert string to number
const inputYear = '1971';
console.log(Number(inputYear));
console.log(inputYear + 18);



