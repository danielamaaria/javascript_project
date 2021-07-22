const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
     operationIdentifier,
     prevResult,
     operationNumber,
     newResult
     ) {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
     }

function add() { // curly braces named function body
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    //currentResult = currentResult + 1; // or curentResult++;
    createAndWriteOutput('+', initalResult, enteredNumber);
    //alert('The result is' + result); // built-in functions
    // return result; //returns the value that's stored in result as a result of this function call
   writeToLog('ADD', initalResult, enteredNumber, currentResult);
}

/* currentResult= add(1, 2);
// //add(5, 5); //This line executes and calls the function, it runs that function
currentResult = (currentResult + 10) * 3 / 2 - 1 ;
 a longer comment across multiple lines */


function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber);
    writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber);
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber);
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); //Meaning: "Hey, when the button is clicked, go ahead and execute add.".
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription); // call a function