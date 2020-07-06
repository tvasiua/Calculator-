const display = document.querySelector(".display");

const operators = ["+", "-", "*", "/"];

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".oper button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(ev) {
  if (display.value[display.value.length - 1] == "+") {
    display.value += "";
  }
  if (display.value[display.value.length - 1] == "/") {
    display.value += "";
  }
  if (display.value[display.value.length - 1] == "*") {
    display.value += "";
  }
  if (display.value[display.value.length - 1] == "-") {
    display.value += "";
  } else {
    display.value += ev.target.innerText;
  }
}

document.querySelector(".eq").addEventListener("click", calc);

function calc() {
  if (eval(display.value) == Infinity) {
    display.value = "Don't divide by zero!";
  }
  if (eval(display.value) == undefined) {
    display.value = "0.00";
  }
  display.value = eval(display.value);
}

const decimal = document.getElementById("decimal");

decimal.onclick = () => {
  if (!display.value.includes(".")) {
    display.value += ".";
  } else {
    display.value += "";
  }
};

document.querySelector(".backspace").addEventListener("click", removeLastItem);

function removeLastItem() {
  let displayValue = display.value;
  display.value = displayValue.substring(0, displayValue.length - 1);
}

document.querySelector(".clear").addEventListener("click", reset);

function reset() {
  display.value = "";
}