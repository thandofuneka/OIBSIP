let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function appendDecimal(decimal) {
    if (!expression.includes('.')) {
        expression += decimal;
        updateDisplay();
    }
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    expression = '';
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}
