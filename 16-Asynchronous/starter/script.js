/*
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


///////////////////////////////////////
*/

//old way hadling asyns js
const request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/name/portugal')
request.send()
console.log(request.responseText);

request.removeEventListener('load', function() {
    console.log(this.responseText);
})