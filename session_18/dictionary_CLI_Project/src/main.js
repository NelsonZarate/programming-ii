import { validateArgs, printHelp } from "./helpers.js";
import chalk from "chalk";
import { getWordOfTheDay } from "./wotd.js";
import { dictionary } from "./dictionary.js";

const Wotd = async function main() {
    const wotd = await getWordOfTheDay();
    console.log(`📚 Word of the Day: ${wotd}`);
}

const args = process.argv.slice(2);
const argsMap = {};

try {
    const invalidFlags = args.some(arg => {
        return arg.startsWith('-- ') || (arg.startsWith('-') && !arg.startsWith('--'));
    });

    if (invalidFlags) {
        printHelp();
        process.exit(1);
    }

    for (let i = 0; i < args.length; i++) {
        const currentArg = args[i];

        // Handle flags starting with "--"
        if (currentArg.startsWith('--')) {
            const key = currentArg.slice(2);  // Remove '--' to get the key name
            const validArgs = ["word", "type", "output"];

            if (key === 'help') {
                printHelp();
                process.exit(0);
            }

            // Handle WOTD (Word of the Day)
            if (key === 'wotd') {
                argsMap[key] = await Wotd();  // Call WOTD function and store result
                i++; // Skip the next argument as it's already handled
            }
            else if (!validArgs.includes(key)) {
                throw new Error(chalk.red('Invalid argument. Try using --help for assistance.'));
            }

            // Handle valid flags and their corresponding values
            if (validArgs.includes(key)) {
                // Ensure the next argument exists and is a valid value
                const nextArg = args[i + 1];
                if (!nextArg || nextArg.startsWith('--')) {
                    throw new Error(chalk.red(`Missing value for --${key} argument`));
                }

                validateArgs(nextArg);  // Validate the argument value
                argsMap[key] = nextArg;  // Store the value in argsMap
                i++;  // Skip the next argument since it's already processed
            }
        }
    }
    dictionary(argsMap);

} catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
}
