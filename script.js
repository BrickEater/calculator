const calculator = document.querySelector(".calculator");

let equation = "";

calculator.addEventListener("click", function(event) {
    if (event.target.matches(".calButton")) {
        const button = event.target;
        equation += button.innerHTML;
        console.log(equation);
    }
    if (event.target.matches(".clear")) {
        equation = "";
    }
    if (event.target.matches(".equal")) {
        let tokens = equation.split(" ");
        console.log(tokens);
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (token === "+") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a + b);
            } else if (token === "-") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a - b);
            } else if (token === "*") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a * b);
            } else if (token === "/") {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a / b);
            } else {
                stack.push(parseFloat(token));
            }
        }
        console.log(stack);
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