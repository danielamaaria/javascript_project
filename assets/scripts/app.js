var defaultResult = 0;
var currentResult = defaultResult;
var logEntries = [];

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

     function calculateResult(calculationType) {
        const enteredNumber = getUserNumberInput();
        const initalResult = currentResult;
        let mathoperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathoperator = '+';
        }  else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathoperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathoperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathoperator = '/';
        }

        createAndWriteOutput(mathoperator, initalResult, enteredNumber);
       writeToLog(calculationType, initalResult, enteredNumber, currentResult);
     }

function add() { // curly braces named function body
   calculateResult('ADD');
}

/* currentResult= add(1, 2);
// //add(5, 5); //This line executes and calls the function, it runs that function
currentResult = (currentResult + 10) * 3 / 2 - 1 ;
 a longer comment across multiple lines */

function subtract() {
   calculateResult('SUBTRACT');
}

function multiply() {
   calculateResult('MULTIPLY');
}

function divide() {
   calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add); //Meaning: "Hey, when the button is clicked, go ahead and execute add.".
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription); // call a function