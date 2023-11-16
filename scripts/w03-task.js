/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1, add2);
}


/* Function Expression - Subtract Numbers */
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(sub1, sub2);
}

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const member = document.querySelector("input[id=member]")
member.addEventListener('change', function() {
    if (this.checked) {
        return true;
    }
    else {
        return false;
    }});

function GetTotalDue () {
    const subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked == true){
        const memTotal = subtotal * .85;
        let total = (memTotal).toFixed(2);
        document.querySelector('#total').innerHTML = `$ ` + total;
    }
    else {
        let total = subtotal.toFixed(2);
        document.querySelector('#total').innerHTML = `$ ${total}`;
    }

    
}
document.querySelector('#getTotal').addEventListener('click', GetTotalDue);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numArray.filter((num) => num % 2 == 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter((num) => num % 2 == 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numArray.reduce((total, num) => total + num);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numArray.map(num => num * 2);
/* Output Sum of Multiplied by 2 Array */
let doubleArray = numArray.map(num => num * 2);
document.querySelector("#sumOfMultiplied").innerHTML = doubleArray.reduce((total, num) => total + num); 