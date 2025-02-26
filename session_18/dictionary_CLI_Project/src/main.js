import { validateArgs, printHelp, removeAnsiCodes } from "./helpers.js";
import chalk from "chalk";
import { getWordOfTheDay } from "./wotd.js";
import { dictionary } from "./dictionary.js";
import fs from "fs";

async function Wotd() {
    const wotd = await getWordOfTheDay();
    console.log(`📚 Word of the Day: ${wotd}`);
    return wotd;
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

        if (currentArg.startsWith('--')) {
            const key = currentArg.slice(2);
            const validArgs = ["word", "type", "output"];

            if (key === 'help') {
                printHelp();
                process.exit(0);
            }

            if (key === 'wotd') {
                argsMap["word"] = await Wotd();
                continue; 
            }

            if (key === 'output') {
                argsMap[key] = args[i + 1];
                i++; 
                continue;
            }

            if (!validArgs.includes(key)) {
                throw new Error(chalk.red('Invalid argument. Try using --help for assistance.'));
            }

            const nextArg = args[i + 1];
            if (!nextArg || nextArg.startsWith('--')) {
                throw new Error(chalk.red(`Missing value for --${key} argument`));
            }

            validateArgs(nextArg);
            argsMap[key] = nextArg;
            i++;
        }
    }

    const outputPath = argsMap.output ? argsMap.output : false;
    const dictionaryData = await dictionary(argsMap);

    if (outputPath) {
        const cleanOutput = removeAnsiCodes(dictionaryData);
        fs.writeFileSync(outputPath, cleanOutput);
        console.log(chalk.green(`✅ Output saved to ${outputPath}`));
    } else {
        console.log(dictionaryData);
    }
} catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
}