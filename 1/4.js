'use strict';

var titleElement = document.querySelector('.title');
const liElement = document.querySelector('#name2');
titleElement.innerHTML += liElement.innerHTML;

console.log(titleElement);