const calculator = document.querySelector(".calculator");

let equation = "";

calculator.addEventListener("click", function(event) {
    if (event.target.matches(".calButton")) {
        const button = event.target;
        equation += button.innerHTML;
        console.log(equation);
    }
});