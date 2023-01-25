// Function: createGameField
const signs = ['X', 'O'];
let currentSign = 0;
let gameField = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];








document.querySelector('button').addEventListener('click', function() {
  document.querySelector('button').innerHTML = 'Clicked';
});

document.getElementsByClassName('block')[0].addEventListener('click', function() {  
  document.getElementsByClassName('block').innerHTML = 'Clicked';
});


