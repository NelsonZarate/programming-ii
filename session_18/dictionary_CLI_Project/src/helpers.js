import chalk from "chalk";

export function validateArgs(arg){
    if (!arg || typeof(arg) != "string") {
        throw new Error(chalk.red(`${arg} must be a word`));
    }
    return true;
}

export function printHelp() {
    console.log(chalk.blue.bold("\n📖 Dictionary CLI - A Simple Word Lookup Tool\n"));
    console.log(chalk.green("Usage:"));
    console.log("  node dictionary.js --word=<word> [options]");
    console.log("  node dictionary.js --wotd");
    console.log("  node dictionary.js --help\n");

    console.log(chalk.green("Options:"));
    console.log("  --word <word>     Look up a word’s definition, synonyms, antonyms, and examples.");
    console.log("  --type <type>     Filter results by word type (e.g., noun, verb).");
    console.log("  --output <file>   Save the results to a specified file (JSON or TXT).");
    console.log("  --wotd           Get a random 'Word of the Day'.");
    console.log("  --help           Show this help menu.\n");

    console.log(chalk.green("Examples:"));
    console.log("  node dictionary.js --word=serendipity");
    console.log("  node dictionary.js --word=serendipity --type=noun");
    console.log("  node dictionary.js --word=serendipity --output=result.txt");
    console.log("  node dictionary.js --wotd\n");

    console.log(chalk.blueBright("📚 Enhance your vocabulary with this CLI dictionary tool!\n"));
    process.exit(1);
}