function add(num1, num2){
  return num1+num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1*num2;
}

function divide(num1, num2){
  return num1/num2;
}

function power(num1, num2){
  return num1**num2;
}

function mod(num1, num2){
  return num1 % num2;
}

function sqrt(num){
  return num ** 0.5;
}

function factorial(num){
  let result = 1;
  for(let n=num; n>0; n-=1){
    result *=n;
  }
  return result;
}

//We have converted the numbers, such as '1' 'X' '2' into actual numerical values.
//We are checking if a number is a NAN with the Number.isNAN() operator 

function calculate(expression) {
const tokens = expression.split(' ');

let num1;
let operator;
let num2;
  
if (tokens.length === 3){
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);
  
   if (Number.isNaN(num1) || Number.isNaN(num2)){
    alert('Not a number. Try again!');
    return;
   }
  } else if(tokens.length === 2){
    operator = tokens [0];
    num1 = Number(tokens[1]);
    if (Number.isNaN(num1)){
      alert('Not a number. Try again!');
      return;
    }
} else {
  alert('Ivalid expression! Try again.');
  return;
}
  

if (operator === '+'){
  return add(num1,num2);
}
if (operator === '-'){
  return subtract(num1,num2);
}
if (operator === '*'){
  return multiply(num1,num2);
}
if (operator === '/'){
  return divide(num1,num2);
}
if (operator === '^'){
  return power(num1,num2);
}
if (operator === '%'){
  return mod(num1,num2);
}
if (operator === 'sqrt'){
  return sqrt(num1);
}
if(operator === '!'){
  if (!Number.isInteger(num1) || num1 < 0){
    alert('Factorial is only defined for positive integers');
    return;
  }
  return factorial(num1);
}
alert('Unrecognized operator.');
}


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
