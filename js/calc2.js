let arr = [];
let memory;
let input;
let display = document.querySelector("#display");
let equalsBtn = document.querySelector("#equals");
let numberBtns = document.querySelectorAll(".numbers");
let operationBtns = document.querySelectorAll(".key--operator");

// Clears current input
function clear() {
  display.textContent = "";
}

// Does the operation (on = tap)
function operate() {}

// Add digit to current literal
function addDigit(value) {
  display.textContent = display.textContent + value;
}

function updateDisplay(value) {
  if (display.textContent.length > 0)
    display.textContent = display.textContent + value;
  else display.textContent = value;
}

// EVENT LISTENERS
equalsBtn.addEventListener("click", () => {
  clear();
});

// Adds event listener for every numerical btn
for (i = 0; i < numberBtns.length; i++) {
  let child = numberBtns[i];
  numberBtns[i].addEventListener("click", () => {
    updateDisplay(child.value);
  });
}

// Add event listener for every operational btn
for (i = 0; i < operationBtns.length; i++) {
    let child = operationBtns[i];
    operationBtns[i].addEventListener("click", () => {
        console.log(child.id)
    });
}
