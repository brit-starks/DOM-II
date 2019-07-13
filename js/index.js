// Your code goes here

// 1. mouaeover 
const contentSec = document.querySelector('.content-section');

contentSec.addEventListener('mouseover', event => contentSec.style.color = 'red');

// 2. mouseleave
contentSec.addEventListener('mouseleave', event => contentSec.style.color = 'black');

// 3. double click here
const welcome = document.querySelector('h2');

welcome.addEventListener('dblclick', e => 
  welcome.style.color = 'orangered'
);

// 4. scroll

// 5. keydown

