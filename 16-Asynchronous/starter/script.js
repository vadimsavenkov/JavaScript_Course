
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


///////////////////////////////////////
//https://github.com/public-apis/public-apis/blob/master/README.md#geocoding

//old way hadling asyns js
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/canada');
request.send();

request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
});

