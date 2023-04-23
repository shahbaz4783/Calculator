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
            let operatorIndex = string.lastIndexOf("+") || string.lastIndexOf("-") || string.lastIndexOf("*") || string.lastIndexOf("/");
            if (operatorIndex == -1) {
                display.innerText = parseFloat(string) / 100;
            } else {
                let operand1 = parseFloat(string.substr(0, operatorIndex));
                let operator = string.substr(operatorIndex, 1);
                let operand2 = parseFloat(string.substr(operatorIndex + 1));
                if (isNaN(operand1) || isNaN(operand2)) {
                    display.innerText = "Invalid Input";
                } else {
                    let result;
                    switch (operator) {
                        case "+":
                            result = operand1 + (operand2 / 100 * operand1);
                            break;
                        case "-":
                            result = operand1 - (operand2 / 100 * operand1);
                            break;
                        case "*":
                            result = operand1 * (operand2 / 100);
                            break;
                        case "/":
                            result = operand1 / (operand2 / 100);
                            break;
                        default:
                            display.innerText = "Invalid Input";
                            return;
                    }
                    display.innerText = result;
                }
            }
        } else {
            display.innerText += item.id;
        }
    }
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
