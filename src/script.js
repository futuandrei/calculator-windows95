"use strict";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const clickSound = new Audio("./sounds/mouse-click.mp3");
let previousInput = "";
let currentInput = "";
let operator = "";
let result = "";
export function calculate(previousInput, operator, currentInput) {
    const prev = parseInt(previousInput);
    const curr = parseInt(currentInput);
    switch (operator) {
        case "+":
            return prev + curr;
        case "-":
            return prev - curr;
        case "*":
            return prev * curr;
        case "/":
            return curr !== 0 ? prev / curr : "Error";
        default:
            return "Invalid Operation";
    }
}
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const value = this.value;
        clickSound.currentTime = 0;
        clickSound.play();
        if (value === "C") {
            previousInput = "";
            currentInput = "";
            operator = "";
            result = "";
            display.textContent = "0";
        }
        else if (value === "=" && previousInput && operator && currentInput) {
            result = calculate(previousInput, operator, currentInput);
            display.textContent = result;
            currentInput = "";
        }
        else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = "";
            }
        }
        else if (value === "+/-") {
            currentInput = (-parseFloat(currentInput)).toString();
            display.textContent = currentInput;
        }
        else if (!isNaN(parseFloat(value))) {
            currentInput = currentInput + value;
            display.textContent = currentInput;
        }
    });
});
function myFunction() {
    console.log("button clicked!");
}
