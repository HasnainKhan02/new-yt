let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multi = document.getElementById("multi");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let ans = document.getElementById("ans");
let eraseBtn = document.getElementById("erase");

let firstValue;
let operation;
let currentInput = num1;

// Set current input on focus
num1.addEventListener("focus", () => currentInput = num1);
num2.addEventListener("focus", () => currentInput = num2);

// Operation buttons
add.onclick = () => {
  firstValue = parseFloat(num1.value);
  operation = "+";
  currentInput = num2;
};

subtract.onclick = () => {
  firstValue = parseFloat(num1.value);
  operation = "-";
  currentInput = num2;
};

multi.onclick = () => {
  firstValue = parseFloat(num1.value);
  operation = "*";
  currentInput = num2;
};

divide.onclick = () => {
  firstValue = parseFloat(num1.value);
  operation = "/";
  currentInput = num2;
};

// Equal button
equal.onclick = () => {
  let secondValue = parseFloat(num2.value);
  let result;

  if (operation === "+") result = firstValue + secondValue;
  else if (operation === "-") result = firstValue - secondValue;
  else if (operation === "*") result = firstValue * secondValue;
  else if (operation === "/") result = firstValue / secondValue;
  else result = "Invalid";

  ans.innerText = "ANS: " + result;
};
if (result>=1000) {
    console.log(result + "K")
    
}
else {
    confirm.log (result)
}
// Number button clicks
document.querySelectorAll(".numBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentInput.value += btn.textContent;
    if (num1.value !== "" && currentInput === num1) {
      currentInput = num2;
    }
  });
});

// Erase button
eraseBtn.addEventListener("click", () => {
  currentInput.value = currentInput.value.slice(0, -1);
});
