let currentInput = "";
let add = document.querySelector("#plus");
let subtract = document.querySelector("#subtract");
let multiply;
let remove;
let divide;
let exponent;
let button = [];
let display = document.querySelector("#display");
let equalsButton = document.querySelector("#equals");
let operation;
let numbers = document.querySelectorAll(".numbers");
let actions = document.querySelectorAll(".key--operator");
let arr = [];
let count = 0;
let memory;
let result;

// for (i = 0; i < 10; i++) {
//   button[i] = document.querySelector();
// }

for (i = 0; i < numbers.length; i++) {
  let child = numbers[i];
  numbers[i].addEventListener("click", () => {
    updateDisplay(child.value);
  });
}

for (i = 0; i < actions.length; i++) {
  let child = actions[i].id;
  actions[i].addEventListener("click", () => {
    operation = child;
  });
}

equalsButton.addEventListener("click", () => {
  console.log(arr);
  operate();
});

add.addEventListener("click", () => {
  operation = 0;
  display.textContent = "+";
});

subtract.addEventListener("click", () => {
  operation = 0;
  arr[count] = display.textContent;
  arr[count + 1] = operation;
  count + 2;
  display.textContent = "-";
});

function clear() {
  currentInput = "";
  arr = [];
}

function updateDisplay(value) {
  if (display.textContent == "+" || value.equals == "-") {
    arr.push(display.textContent, value);
    display.textContent = value;
    count++;
  } else {
    memory = display.textContent + value;
    arr[0] = memory;
    display.textContent = display.textContent + value;
  }
}

function operate() {
  console.log(result);
  display.textContent = "";
  arr = [];
}
