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
        } else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else if (item.id == "%") {
            let string = display.innerText.toString();
            let operatorIndex = string.lastIndexOf("+") || string.lastIndexOf("-") || string.lastIndexOf("*") || string.lastIndexOf("/");
            if (operatorIndex == -1) {
                display.innerText = "Invalid Input";
            } else {
                let operand1 = string.substring(0, operatorIndex);
                let operand2 = string.substring(operatorIndex+1);
                let operator = string.charAt(operatorIndex);
                let result = 0;
                if (operator == "+") {
                    result = parseFloat(operand1) + (parseFloat(operand1) * (parseFloat(operand2) / 100));
                } else if (operator == "-") {
                    result = parseFloat(operand1) - (parseFloat(operand1) * (parseFloat(operand2) / 100));
                } else if (operator == "*") {
                    result = parseFloat(operand1) * (parseFloat(operand2) / 100);
                } else if (operator == "/") {
                    result = parseFloat(operand1) / (parseFloat(operand2) / 100);
                }
                display.innerText = result;
            }
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
