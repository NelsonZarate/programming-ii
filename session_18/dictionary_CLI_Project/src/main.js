import { validateArgs, printHelp } from "./helpers.js";
import chalk, { Chalk } from "chalk";
import { getWordOfTheDay } from "./wotd.js";

const Wotd = async function main() {
    const wotd = await getWordOfTheDay();
    console.log(`📚 Word of the Day: ${wotd}`);
}


const args = process.argv.slice(2);
const argsMap = {};

try {
    const invalidFlags = args.some(arg => {
        return arg.startsWith('-- ') || 
               (arg.startsWith('-') && !arg.startsWith('--'));
    });

    if (invalidFlags) {
        printHelp();
    }

    for (let i =  0; i < args.length; i++) {
        const currentArg = args[i];
        
        if (currentArg.startsWith('--')) {
            const key = currentArg.slice(2);
            const validArgs = ["word", "type","output"];
            if (key === 'help') {
                printHelp();
            }
            if (key === 'wotd') {
                const nextArg = args[i];
                argsMap[key] = Wotd();
                i++;
            }
            else if (!validArgs.includes(key)) {
                throw new Error(chalk.red('try --help ?'));
                process.exit(1);
            }
            if (validArgs.includes(key)) {
                const nextArg = args[i + 1];
                validateArgs(nextArg);
                argsMap[key] = nextArg;
                i++;
            }
        }
    }
  
} catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
}