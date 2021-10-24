/*
//function declaration
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million population and its capital city is ${capitalCity}!`;
};

const describeFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(describeFinland);

const describeCanada = describeCountry('Canada', 35, 'Ottawa');
console.log(describeCanada);

const describeRussia = describeCountry('Russia', 140, 'Moscow');
console.log(describeRussia);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populationChina = percentageOfWorld1(1441);
console.log(populationChina);

const populationCanada = percentageOfWorld1(38);
console.log(populationCanada);

const populationRussia = percentageOfWorld1(146);
console.log(populationRussia);


const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const populationChina = percentageOfWorld2(1441);
const populationCanada = percentageOfWorld2(38);
const populationRussia = percentageOfWorld2(146);

console.log(populationChina, populationCanada, populationRussia);

const percentageOfWorld3 = population => (population / 7900) * 100;

const populationChina = percentageOfWorld3(1441);
const populationCanada = percentageOfWorld3(38);
const populationRussia = percentageOfWorld3(146);

console.log(populationChina, populationCanada, populationRussia)

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} % population of the world`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Canada', 38));
console.log(describePopulation('Russia', 146));
console.log(describePopulation('India', 1397));

const populations = [1441, 38, 146, 1397];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

const neighbours = ['Indonesia', 'Pakistan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop('Utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably is not central European country!')
}

//replace country
neighbours[neighbours.indexOf('Pakistan')] = 'Kurdistan';
console.log(neighbours);
*/