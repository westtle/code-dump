const prompt = require("prompt-sync")({sigint: true}); // prompt-sync (4.2.0) - https://www.npmjs.com/package/prompt-sync/v/4.2.0

let userString = getUserInput("Input a word or a sentence to check").trim();

function getUserInput(question) {
    do {
        var input = prompt(`${question}: `);
    } while (!input.trim().length); // While length is 0 (false), but got reversed to 1 (true) because the negation.

    return input;
};

function palindrome(string) {
    let stringFiltered = string.toLowerCase().replace(/[^A-Za-z0-9]/g, ""); // Remove all non-alphanumerics characters.
    let reverseStringFiltered = stringFiltered.split("").reverse().join("");

    console.log(`\n${string} > ${stringFiltered}`);
    console.log(stringFiltered === reverseStringFiltered ? `"${string}" is a palindrome.` : `"${string}" is NOT a palindrome.`);
};

palindrome(userString);

// Some tests.
palindrome("Hello World!");
palindrome("A man, a plan, a canal. Panama");
palindrome("No lemons, no melon");
palindrome("Never odd or even");
palindrome("almostomla");