/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Samuel Mickelsen";
let currentYear = 2023;
let profilePicture = 'images/Sam.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute(`src`, profilePicture);




/* Step 5 - Array */

let foods = ['Pizza', 'Hot Chocolate', 'Fettucini Alfredo'];

foodElement.textContent = foods;

let moreFoods = ['Ice Cream', 'Taco Soup'];

foods.push(moreFoods);

foodElement.innerHTML += `<br>${foods}`;

foods.shift();

foodElement.innerHTML += `<br>${foods}`;

foods.pop();

foodElement.innerHTML += `<br>${foods}`;



