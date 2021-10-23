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