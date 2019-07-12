// Your code goes here

const contentSec = document.querySelector('.content-section');

contentSec.addEventListener('mouseover', event => contentSec.style.color = 'red');
contentSec.addEventListener('mouseleave', event => contentSec.style.color = 'black');