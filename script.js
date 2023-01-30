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