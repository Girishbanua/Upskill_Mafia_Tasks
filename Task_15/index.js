const userName = document.querySelector('#userName');
const btn = document.querySelector('button');
const greeting = document.querySelector('h1');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

const greetUser = () => {
    const name = userName.value;    
    greeting.innerText = `Hello ${name}!`;
    userName.value = "";
}

const changeColor1 = () => {
    box1.classList.toggle('red');
}

const changeColor2 = () => {
    box2.classList.toggle('blue');
}

const changeColor3 = () => {
    box3.classList.toggle('green'); 
}

const changeColor4 = () => {
    box4.classList.toggle('yellow');
}