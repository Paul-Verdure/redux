    
let firstValue = window.prompt('Tapez la valeur.');
let operator = window.prompt("Tapez l'opérateur.");;
let secondValue = window.prompt('Tapez la valeur.');

function calculator(firstValue, operator, secondValue) {
switch (operator) {
    case "+":
        console.log(parseInt(firstValue) + parseInt(secondValue));
        break;
    case "-":
        console.log(parseInt(firstValue) - parseInt(secondValue));
        break;
    case "/":
        console.log(parseInt(firstValue) / parseInt(secondValue));
        break;
    default: 
    console.log("Invalid operator");    
}
}
calculator(firstValue, operator, secondValue);

