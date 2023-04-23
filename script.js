const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerText = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal') {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal') {
      display.innerText = 'Empty!';
      setTimeout(() => (display.innerText = ''), 2000);
    } else if (item.id == '%') {
      let string = display.innerText.toString();
      let operatorIndex = string.lastIndexOf('+') || string.lastIndexOf('-') || string.lastIndexOf('*') || string.lastIndexOf('/');
      
      // If the operatorIndex is -1, it means there is no operator in the string, so we show an error message.
      if (operatorIndex == -1) {
        display.innerText = 'Invalid Input';
        return;
      }
      
      let operand1 = string.substr(0, operatorIndex);
      let operator = string.substr(operatorIndex, 1);
      let operand2 = string.substr(operatorIndex + 1);
      let result;
      
      // If the second operand is empty, we calculate the percentage of the first operand.
      if (operand2 == '') {
        result = parseFloat(operand1) / 100;
      } else {
        let expression = operand1 + operator + (parseFloat(operand1) * parseFloat(operand2) / 100);
        result = eval(expression);
      }
      
      // Update the display with the result.
      display.innerText = result;
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
