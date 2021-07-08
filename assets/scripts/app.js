const defaultResult = 0;
let currentResult = defaultResult;


function add() { // curly braces named function body
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
    //alert('The result is' + result); // built-in functions
    // return result; //returns the value that's stored in result as a result of this function call
};

// currentResult= add(1, 2);
// //add(5, 5); //This line executes and calls the function, it runs that function
// currentResult = (currentResult + 10) * 3 / 2 - 1 ;


addBtn.addEventListener('click', add);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription); // call a function