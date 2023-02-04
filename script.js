const calculator = document.querySelector(".calculator");

let firstOperand = "";
let operator = "";
let secondOperand = "";

calculator.addEventListener("mouseup", function(event) {

    if (event.target.matches(".numButton") &&
     document.querySelector(".operator").innerHTML === "" &&
     document.querySelector(".secondOperand").innerHTML === "") {

        firstOperand = document.querySelector(".firstOperand").innerHTML += event.target.innerHTML;
        console.log(firstOperand);
    }
    if (event.target.matches(".opButton") &&
     document.querySelector(".firstOperand").innerHTML != "" &&
     document.querySelector(".operator").innerHTML === "") {

        operator = document.querySelector(".operator").innerHTML += event.target.innerHTML;
        console.log(operator);
    }
    if (event.target.matches(".numButton") &&
     document.querySelector(".firstOperand").innerHTML != "" &&
     document.querySelector(".operator").innerHTML != "") {

        secondOperand = document.querySelector(".secondOperand").innerHTML += event.target.innerHTML;
        console.log(secondOperand);
    }
    if (event.target.matches(".equal") &&
     document.querySelector(".firstOperand").innerHTML != "" &&
     document.querySelector(".operator").innerHTML != "" &&
     document.querySelector(".secondOperand").innerHTML != "") {

        console.log(firstOperand, operator, secondOperand);
    }

});

/* 
I think how I should make this is have 3 variables: a - the first value, b - the operator, and c - the last value. From there I will evaluate the equation. The process should be that you can continue to input numbers but if you press an operator button it commits the value for a and the operator and moves the entering the values for c until you press the equal button.

- Listen for number inputs and store them in variable a
- If an operator button is pressed store the a value and b value and move on to c
- listen for number inputs for the c value
- if the equal button is pressed evaluate the equation

This would look something like this at the end:
let a = 25
let b = *
let c = 5
console.log(a b c)
*/