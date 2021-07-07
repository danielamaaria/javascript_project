const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) { // curly braces named function body
    const result = num1 + num2;
    alert('The result is' + result); // built-in functions
};

// add(1, 2); //This line executes and calls the function, it runs that function

currentResult = (currentResult + 10) * 3 / 2 - 1 ;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription); // call a function