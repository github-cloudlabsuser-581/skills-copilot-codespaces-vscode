// Test case 1: Addition
let firstNum = 5;
let secondNum = 10;
let operation = 'add';
let result = parseFloat(firstNum) + parseFloat(secondNum);
console.log(`The result is: ${result}`);
// Expected output: The result is: 15

// Test case 2: Subtraction
firstNum = 15;
secondNum = 7;
operation = 'sub';
result = parseFloat(firstNum) - parseFloat(secondNum);
console.log(`The result is: ${result}`);
// Expected output: The result is: 8

// Test case 3: Multiplication
firstNum = 3;
secondNum = 4;
operation = 'mul';
result = parseFloat(firstNum) * parseFloat(secondNum);
console.log(`The result is: ${result}`);
// Expected output: The result is: 12

// Test case 4: Division
firstNum = 20;
secondNum = 5;
operation = 'div';
if (secondNum != '0') {
    result = parseFloat(firstNum) / parseFloat(secondNum);
    console.log(`The result is: ${result}`);
} else {
    console.log('Error: Division by zero is not allowed.');
}
// Expected output: The result is: 4