const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      let string = display.innerText.toString();
      let operatorIndex = string.lastIndexOf("+") || string.lastIndexOf("-") || string.lastIndexOf("*") || string.lastIndexOf("/");
      if (operatorIndex == -1) {
        display.innerText = "Invalid Input";
      } else {
        let operator = string[operatorIndex];
        let operands = string.split(operator).map(parseFloat);
        let result;
        switch (operator) {
          case "+":
            result = operands.reduce((a, b) => a + b);
            break;
          case "-":
            result = operands.reduce((a, b) => a - b);
            break;
          case "*":
            result = operands.reduce((a, b) => a * b);
            break;
          case "/":
            result = operands.reduce((a, b) => a / b);
            break;
        }
        display.innerText = result.toString();
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "%") {
      let string = display.innerText.toString();
      let operatorIndex = string.lastIndexOf("+") || string.lastIndexOf("-") || string.lastIndexOf("*") || string.lastIndexOf("/");
      if (operatorIndex == -1) {
        display.innerText = "Invalid Input";
      } else {
        let operator = string[operatorIndex];
        let operands = string.split(operator);
        let number = parseFloat(operands[operands.length - 1]);
        let percent = parseFloat(number) * 0.01;
        let result = operands.slice(0, -1).join(operator) + operator + (number * percent).toString();
        display.innerText = result;
      }
    } else {
      display.innerText += item.id;
    }
  };
});


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');

let isDark = true;
themeToggleBtn.onclick  = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
