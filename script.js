const calculator = document.querySelector(".calculator");

let equation = "";
let firstOperand = document.querySelector(".firstOperand").innerHTML;
let operator = document.querySelector(".operator").innerHTML;
let secondOperand = document.querySelector(".secondOperand").innerHTML;


calculator.addEventListener("click", function(event) {

    if (event.target.matches(".numButton") && operator === "" && secondOperand === "") {
        document.querySelector(".firstOperand").innerHTML += firstOperand + event.target.innerHTML;
        console.log(document.querySelector(".firstOperand").innerHTML === "")
        console.log(document.querySelector(".firstOperand").innerHTML);
    }
    if (event.target.matches(".opButton") && document.querySelector(".firstOperand").innerHTML != "" && operator === "") {
        document.querySelector(".operator").innerHTML += operator + event.target.innerHTML;
    }
    if (event.target.matches(".numButton") && firstOperand != "" && operator != "") {
        document.querySelector(".secondOperand").innerHTML += secondOperand + event.target.innerHTML;
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