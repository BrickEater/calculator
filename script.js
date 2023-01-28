console.log("hello world");

const calculator = document.querySelector(".calculator");
calculator.addEventListener("click", function(event) {
    if (event.target.matches(".calButton")) {
        const button = event.target;
        const func = button.dataset.function;
        if(func) window[func]();
        else console.log("No function matching this button class");
    }
});