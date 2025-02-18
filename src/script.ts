"use strict";

const display = document.querySelector(".display") as HTMLElement;
const buttons = document.querySelectorAll(
  ".btn"
) as NodeListOf<HTMLButtonElement>;

const clickSound = new Audio("../sounds/mouse-click.mp3");

let previousInput: string = "";
let currentInput: string = "";
let operator: string = "";
let result: string | number = "";

export function calculate(
  previousInput: string,
  operator: string,
  currentInput: string
) {
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

buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", function () {
    const value: string = this.value;

    clickSound.currentTime = 0;
    clickSound.play();

    if (value === "C") {
      previousInput = "";
      currentInput = "";
      operator = "";
      result = "";
      display.textContent = "0";
    } else if (value === "=" && previousInput && operator && currentInput) {
      result = calculate(previousInput, operator, currentInput);
      display.textContent = result as string;
      currentInput = "";
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        operator = value;
        currentInput = "";
      }
    } else if (value === "+/-") {
      currentInput = (-parseFloat(currentInput)).toString();
      display.textContent = currentInput;
    } else if (!isNaN(parseFloat(value))) {
      currentInput = currentInput + value;
      display.textContent = currentInput;
    }
  });
});

function myFunction() {
  console.log("button clicked!");
}
