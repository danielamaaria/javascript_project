const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() { // curly braces named function body
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initalResult, enteredNumber);
    //alert('The result is' + result); // built-in functions
    // return result; //returns the value that's stored in result as a result of this function call
}

// currentResult= add(1, 2);
// //add(5, 5); //This line executes and calls the function, it runs that function
// currentResult = (currentResult + 10) * 3 / 2 - 1 ;


function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber);
}

addBtn.addEventListener('click', add); //Meaning: "Hey, when the button is clicked, go ahead and execute add.".
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription); // call a function