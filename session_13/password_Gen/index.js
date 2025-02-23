import { passwordGen } from "./pwgen.js";
import chalk from "chalk";

const args = process.argv.slice(2);
const argsMap = {};

try {
  
    const invalidFlags = args.some(arg => {
        return arg.startsWith('-- ') || 
               (arg.startsWith('-') && !arg.startsWith('--'));
    });

    if (invalidFlags) {
        console.error(chalk.red('Error: Invalid flag format!'));
        console.log(chalk.yellow('Flags must:'));
        console.log('- Start with two dashes (--)');
        console.log('- Have no space between -- and flag name');
        console.log('- Use format: --flag or --flag=value');
        console.log(chalk.green('\nExample:'), 'node index.js --length 12 --uppercase');
        process.exit(1);
    }

    for (let i = 0; i < args.length; i++) {
        const currentArg = args[i];
        
        if (currentArg.startsWith('--')) {
            const key = currentArg.slice(2);
            if (key === 'number') {
                console.error(chalk.red('Error: Did you mean --numbers?'));
                process.exit(1);
            }


            if (key === 'length') {
                const nextArg = args[i + 1];
                if (!nextArg || isNaN(nextArg)) {
                    console.error(chalk.red('Error: --length requires a numeric value'));
                    process.exit(1);
                }
                argsMap[key] = parseInt(nextArg, 10);
                i++;
            } else {

                argsMap[key] = true;
            }
        }
    }

    const pwd = passwordGen(argsMap);
    console.log(chalk.green('Generated Password:'), chalk.bold(pwd));
} catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
}