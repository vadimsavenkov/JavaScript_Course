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

*/
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