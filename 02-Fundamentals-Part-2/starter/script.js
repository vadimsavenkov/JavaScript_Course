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


//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearUntilRetirement(1971, 'Vadim'));
console.log(yearUntilRetirement(1977, 'Alex'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//version1 arrow function
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(1971, 'Vadim'));

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    //const age = 2021 - birthYear;
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearUntilRetirement(1971, 'Vadim'));
console.log(yearUntilRetirement(1951, 'Alex'));


// third code challenge part1

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

//coding challenge #1
//create function to calculate average
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win: ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins win: ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(300, 100);

// Arrays
const friend1 = 'Nick';
const friend2 = 'Steve';
const friend3 = 'Peter';

const friends = ['Nick', 'Steve', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1954, 2012, 2001);
console.log(years1);

//log to console
console.log(friends[2]);
console.log(friends[friends.length - 1]);
console.log(friends.length);

//replace friend
friends[2] = 'Jay';
console.log(friends);

const Vadim = ['Vadim', 'Savenkov', 2021 - 1971,
    'engineer', friends];
console.log(Vadim);

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//basic array operations - methods
const friends = ['Nick', 'Steve', 'Peter'];

//use push method to add element at the end
friends.push('Jay');

const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);
//add to the begining
friends.unshift('John');
console.log(friends);

// remove last
friends.pop()
console.log(friends);

// remove first
friends.shift()
console.log(friends);

console.log(friends.includes('Jay'));

if (friends.includes('Jay')) {
    console.log('Jay is your friend!')
}

const bill = 400;
// let tip;

// if (bill >= 50 && bill <= 300) {
//     tip = 15 / 100;
// } else {
//     tip = 20 / 100
// }
// console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value was ${bill + (bill * tip)}`);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);


//coding challenge #2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

console.log(total);

//objects
//the simpliest way to create object
//order is important in arrays, not in objects!
const Vadim = {
    firstName: 'Vadim',
    lastName: 'Savenkov',
    age: 2021 - 1971,
    job: 'developer',
    friends: ['Nick', 'Steve', 'Peter']
};

const Vadim = {
    firstName: 'Vadim',
    lastName: 'Savenkov',
    age: 2021 - 1971,
    job: 'developer',
    friends: ['Nick', 'Steve', 'Peter']
};

console.log(Vadim);
//dot notation
console.log(Vadim.job);
//bracket notation
console.log(Vadim['job']);

const nameKey = 'Name';
console.log(Vadim['first' + nameKey]);
console.log(Vadim['last' + nameKey]);

//create popup window
const interestedIn = prompt('What do you want to know about Vadim! Choose between firstName, lastName, age, job and friends');
if (Vadim[interestedIn]) {
    console.log(Vadim[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

Vadim.location = 'Canada';
Vadim['linkedIn'] = '@vadimsavenkov';
console.log(Vadim);

//little challenge
console.log(`${Vadim.firstName} has ${Vadim.friends.length} friends, and his best friend is called ${Vadim.friends[0]}`);

const Vadim = {
    firstName: 'Vadim',
    lastName: 'Savenkov',
    birthYear: 1971,
    job: 'developer',
    friends: ['Nick', 'Steve', 'Peter'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2021 - this.birthYear
    // }

    calcAge: function () {
        console.log(this);
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    //using
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(Vadim.calcAge());
//console.log(Vadim['calcAge'](1991));
console.log(Vadim.calcAge());
console.log(Vadim.getSummary());

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 120;
// const heightJohn = 1.95;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// console.log(bmiMark, bmiJohn);

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
// } else {
//     console.log(`Mark's BMI(${bmiMark}) is lower than John's(${bmiJohn})!`)
// }

const dataMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        console.log(this);
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const dataJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        console.log(this);
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

dataMark.calcBMI();
dataJohn.calcBMI();
console.log(dataMark.bmi, dataJohn.bmi)

if (dataMark.bmi > dataJohn.bmi) {
    console.log(`${dataMark.fullName}'s BMI(${dataMark.bmi}) is higher than ${dataJohn.fullName}'s BMI(${dataJohn.bmi})`);
} else if (dataJohn.bmi > dataMark.bmi) {
    console.log(`${dataJohn.fullName}'s BMI(${dataJohn.bmi}) is higher than ${dataMark.fullName}'s BMI(${dataMark.bmi})`);
};

//loops
// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');
// console.log('Lifting weights repetition 6 ');
// console.log('Lifting weights repetition 7 ');
// console.log('Lifting weights repetition 8 ');
// console.log('Lifting weights repetition 9 ');
// console.log('Lifting weights repetition 10 ');

//for loop keeps running while condition TRUE!
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//create array
const Vadim = [
    'Vadim',
    'Savenkov',
    2021 - 1971,
    'engineer',
    ['Nick', 'Steve', 'Peter'],
    true
];

const types = [];
//loop array
for (let i = 0; i < Vadim.length; i++) {
    //reading Vadim's array
    console.log(Vadim[i], typeof Vadim[i])
    //filling types array
    // types[i] = typeof Vadim[i];
    types.push(typeof Vadim[i]);
}

console.log(types);

const years = [1991,
    2007,
    1969,
    2020
]
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue statement
console.log('---ONLY STRINGS---')
for (let i = 0; i < Vadim.length; i++) {
    if (typeof Vadim[i] !== 'string') continue;

    console.log(Vadim[i], typeof Vadim[i])
}

//break statement
console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < Vadim.length; i++) {
    if (typeof Vadim[i] !== 'number') break;

    console.log(Vadim[i], typeof Vadim[i])
}

//looping backwards
const Vadim = [
    'Vadim',
    'Savenkov',
    2021 - 1971,
    'engineer',
    ['Nick', 'Steve', 'Peter'],
    true
];

for (let i = Vadim.length - 1; i >= 0; i--) {
    console.log(i, Vadim[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`while: Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}

*/

//coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
// console.log(total);

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i]);
}
console.log(bills, tips, totals);

//const arr = [];
const calcAve = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    //console.log(sum);
    return sum / arr.length;
}

//console.log(calcAve([2, 3, 7]));
console.log(calcAve(totals));
console.log(calcAve(tips));
