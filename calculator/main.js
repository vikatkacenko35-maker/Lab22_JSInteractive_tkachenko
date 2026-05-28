import { Calculator } from "./calculator.js";

document.addEventListener("DOMContentLoaded", () => {
    const calc = new Calculator();
    calc.init();
});


const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
let expression = "";
buttons.forEach(button => {
  button.addEventListener("click", () => {

const value = button.textContent;
if (value === "C") {
  expression = "";
  display.value = "";
  return;
}
if (value === "=") {
  try {
    const result = eval(expression);
    expression = String(result);
    display.value = expression;
  } catch (e) {
    display.value = "Ошибка";
    expression = "";
  }
  return;
}
expression += value;
display.value = expression;
  });
});