const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0

const numberByUser = getUserInput("Input the number of loop you want");

function getUserInput(question) {
    do {
        var input = Number(prompt(`${question}: `, "null"));
    } while(!/^[^\-]\d*$/.test(input));

    return input;
};

function fizzBuzz(numberOfLoop) {
    for (let i = 1; i <= numberOfLoop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Fizz Buzz! (${i})`);
        } else if (i % 3 === 0) {
            console.log(`Fizz! (${i})`);
        } else if (i % 5 === 0) {
            console.log(`Buzz! (${i})`);
        } else {
            console.log(i);
        };
    };
};

fizzBuzz(numberByUser);