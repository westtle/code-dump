const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0

const tableItems = [{}];

const squareRoot = getUserInput("Square root to find");
const initialGuess = getUserInput("Initial guess");

const squareRootApproximate = getSquareRoot(squareRoot, initialGuess);

console.log("");
console.table(tableItems);
console.log(` ${String.fromCharCode(parseInt("221A", 16)) + squareRoot} = ${squareRootApproximate}`);

function getUserInput(question) {
    do {
        var input = Number(prompt(`${question}: `, "null"));
    } while(!/^[1-9]\d*(\.\d*)?$/.test(input));

    return input;
};

function getSquareRoot(squareRoot, initialGuess) {
    if (squareRoot === 0) return 0;

    let errorRate;
    const accuracy = 0.0001;

    let approximate = initialGuess;

    do {
        // Declare errorRate here for condition checking.
        errorRate = getErrorRate(squareRoot, approximate);

        // Push an object to an array to display as a table later.
        addTableItem(`(${approximate} + ${squareRoot} / ${approximate}) / 2`, getNextApprox(squareRoot, approximate), getErrorRate(squareRoot, approximate));
        
        // Update approximate.
        approximate = getNextApprox(squareRoot, approximate);

    } while (errorRate > accuracy);

    return approximate;
};

function getNextApprox(squareRoot, approximate) {
    return (approximate + squareRoot / approximate) / 2;
};

function getErrorRate(squareRoot, approximate) {
    return Math.abs(Number(getNextApprox(squareRoot, approximate) - approximate).toFixed(10));
};

function addTableItem(formula, result, error) {
    tableItems.push({formula, result, error});
};