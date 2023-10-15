const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0

const userInput = getUserInput("Input your number");
console.log(`|${userInput}| = ` + absolute(userInput));

function getUserInput(question) {
    do {
        var input = Number(prompt(`${question}: `, "null"));
    } while(isNaN(input));

    return input;
};

function absolute(num) {
    if (num < 0) num *= -1;
    return num;
};