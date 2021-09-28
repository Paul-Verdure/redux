    
let firstValue = document.querySelector("first_number");
let operator = document.querySelector("operator");
let secondValue = document.querySelector("second_number");
let calculate = document.querySelector("calculate");

calculate.addEventListener(click, function(event){
    console.log(firstValue);
    console.log(secondValue);
    console.log(operator);
});




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




