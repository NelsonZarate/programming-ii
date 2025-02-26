import chalk from "chalk";
import boxen from "boxen";
/**
 * 
 * @param {String} arg 
 * @returns {Boolean}
 */
export function validateArgs(arg){
    if (!arg || typeof(arg) != "string") {
        throw new Error(chalk.red(`${arg} must be a word`));
    }
    return true;
}
/**
 * @returns {String} 
 */
export function printHelp() {
    const helpText = `
    ${chalk.blue.bold("📖 Dictionary CLI - A Simple Word Lookup Tool")}

    ${chalk.green("Usage:")}
    node dictionary.js --word=<word> [options]
    node dictionary.js --wotd
    node dictionary.js --help

    ${chalk.green("Options:")}
    --word <word>     Look up a word’s definition, synonyms, antonyms, and examples.
    --type <type>     Filter results by word type (e.g., noun, verb).
    --output <file>   Save the results to a specified file (JSON or TXT).
    --wotd           Get a random 'Word of the Day'.
    --help           Show this help menu.

    ${chalk.green("Examples:")}
    npm run dictionary -- --word serendipity
    npm run dictionary -- --word serendipity --type noun
    npm run dictionary -- --word serendipity --output result.txt
    npm run dictionary -- --wotd

    ${chalk.blueBright("📚 Enhance your vocabulary with this CLI dictionary tool!")}
    `;

    const boxOptions = {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "cyan",
    };

    console.log(boxen(helpText, boxOptions));
    process.exit(1);
}

/**
 * 
 * @param {String} str 
 * @returns 
 */
export function removeAnsiCodes(str) {
    return str.replace(/\x1b\[([0-9]{1,2}(?:;[0-9]{1,2})?)?[m|K]/g, '');
}
