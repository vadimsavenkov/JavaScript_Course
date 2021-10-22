/*
// first code challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);


/ second code challenge
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

//Values and variables
let country = ('Canada');
let continent = ('North America');
let population = ('40,000,000.0');
console.log(`${country} in ${continent} has ${population} population`);
//data types
let isIsland = false;
let language;
console.log(typeof (country), typeof (isIsland), typeof (population), typeof (language));
//let vs const
language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
isIsland = true;
//basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);
//strings and template literals
const description = `${country} is in ${continent}, and its
${population} million people speak ${language}`;
//if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
    below average`,
    );
}


//conversion and coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Equality Operators: == vs. ===
const numNeighbours = prompt(
    'How many neighbour countries does your country have?');

// LATER : This helps us prevent bugs
const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


//logical operators
let language = 'russian';
let country = 'Russia';
let population = '40';
let isIsland = false;

if (language === 'russian' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

//switch statement
let language = 'russian';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

//ternary operator

const country = 'Canada';
const population = '32';

console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
)
*/