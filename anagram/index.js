const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0

const firstUserString = getUserInput("First word or sentence").trim();
const secondUserString = getUserInput("Second word or sentence").trim();

function getUserInput(question) {
    do {
        var input = prompt(`${question}: `);
    } while (!input.trim().length); // While length is 0 (false), but got reversed to 1 (true) because the negation.

    return input;
};

function anagram(firstString, secondString) {
    const firstStringSorted = sortAlphabetically(firstString.toLowerCase()).trim();
    const secondStringSorted = sortAlphabetically(secondString.toLowerCase()).trim();

    console.log("\n" + firstString + " === " + secondString);
    console.log(firstStringSorted === secondStringSorted ? "It is an anagram." : "Not an anagram.");
};

function sortAlphabetically(string) {
    return string.split("").sort().join("");
};

anagram(firstUserString, secondUserString);

// Some tests.
anagram("Hello", "World");
anagram("Fried", "Fired");
anagram("Listen", "Silent");