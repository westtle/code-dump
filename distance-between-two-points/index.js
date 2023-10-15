const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0
const chalk = require("chalk"); // chalk (4.1.2) - https://www.npmjs.com/package/chalk/v/4.1.2

const coordinates = []; // Will have 4 value inside, x1, y1, x2, y2.

function getUserInput() {
    for (let i = 0; i < 4; i++) {
        do {
            // Used var so the input value can be used inside the condition and be pushed into the array outside of this loop.
            var input = Number(prompt(`${i === 0 ? "x1" : i === 1 ? "y1" : i === 2 ? "x2": "y2"}: `, "null"));
        } while(!/^\-?\d+(\.\d+)?$/.test(input));

        coordinates.push(input);
    };
};

function getDistance(x1, y1, x2, y2) {
    // The formula is √(x2-x1)² + (y2-y1)². This function doesn't calculate the square root itself.
    return ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
};

function getSquareRoot(squareRoot) {
    if (squareRoot === 0) return 0;

    let errorRate;
    const accuracy = 0.0001;

    let approximate = squareRoot;

    do {
        // Declare errorRate here for condition checking.
        errorRate = getErrorRate(squareRoot, approximate);

        // Update approximate for the next iteration.
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

function rainbowText(string) {    
    const colors = ["red", "yellow", "green", "cyan", "blue", "magenta"];

    return string.match(/.{1,6}/g).map((letter, i) => chalk[colors[i % colors.length]](letter)).join("");
};

function start() {
    console.log(chalk.italic.bold.underline(rainbowText(" Calculate the distance between two points! ")));
    console.log("        " + chalk.italic.bold.underline(rainbowText(" √(x2 - x1)²  +  (y2 - y1)² ")) + "\n");

    getUserInput();

    let distance = getDistance(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
    let squareRootOfDistance = getSquareRoot(distance);
    let squareRootSymbol = String.fromCharCode(parseInt("221A", 16));

    console.log(`\nThe distance between ${chalk.yellow(`(${coordinates[0]}, ${coordinates[1]})`)} and ${chalk.cyan(`(${coordinates[2]}, ${coordinates[3]})`)} is ${chalk.green(squareRootSymbol + distance)}`);
    console.log(`${chalk.green(squareRootSymbol + distance)} = ${squareRootOfDistance}`);
};

start();