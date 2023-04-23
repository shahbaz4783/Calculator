const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        } else if (display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        } else if (item.id === "exponential") {
          const operatorIndex = displayValue.lastIndexOf("+") || displayValue.lastIndexOf("-") || displayValue.lastIndexOf("*") || displayValue.lastIndexOf("/");
          if (operatorIndex === -1) {
          display.textContent = "Invalid Input";
          return;
        }

          const firstNumber = parseFloat(displayValue.substring(0, operatorIndex));
          const secondNumber = parseFloat(displayValue.substring(operatorIndex + 1, displayValue.length));
          const result = Math.pow(firstNumber, secondNumber);

          display.textContent = result;
            
         } else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else{
            display.innerText += item.id; 
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');

let isDark = true;
themeToggleBtn.onclick  = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
