function display(input) {
    document.getElementById('result').value += input;
}

function solve() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function displayPercentage() {
    const inputValue = document.getElementById('result').value;
    const percentageValue = parseFloat(inputValue) / 100;
    document.getElementById('result').value = percentageValue;
}
function calculateSquareRoot() {
    const inputValue = document.getElementById('result').value;
    const result = Math.sqrt(parseFloat(inputValue));
    document.getElementById('result').value = result;
}

function calculateExponent() {
    const inputValue = document.getElementById('result').value;
    const result = eval(inputValue); // You can use eval for simplicity, but consider implementing a safer solution for more complex expressions.
    document.getElementById('result').value = result;
}
