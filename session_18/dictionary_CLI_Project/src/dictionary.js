import { getWordDefinition } from "./api_call.js";
import Table from "cli-table3";
import chalk from "chalk";
import boxen from "boxen";
import ora from "ora";

/**
 * 
 * @param {String} text 
 * @param {Number} width 
 * @returns {String}
 */
function wrapText(text, width) {
    const wrappedText = [];
    let currentLine = '';

    text.split(' ').forEach(word => {
        if ((currentLine + word).length > width) {
            wrappedText.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += word + ' ';
    });

    if (currentLine.trim()) {
        wrappedText.push(currentLine.trim());
    }

    return wrappedText.join('\n');
}

/**
 * 
 * @param {Map} argsMap 
 * @returns {string} word definition
 * 
 */
export async function dictionary(argsMap) {
    if (!argsMap.word) {
        argsMap.word = "hello";
    }

    const spinner = ora(chalk.cyan(`🔍 Searching for "${argsMap.word}"...`)).start();
    let output = "";

    try {
        let data = await getWordDefinition(argsMap.word);
        spinner.stop();

        if (!data || data.length === 0) {
            output += chalk.red(`❌ No meanings found for: "${argsMap.word}"\n`);
            return output;
        }

        let wordData = data[0];
        let meanings = wordData.meanings;
        let wordTitle = chalk.blue.bold(`📖 Word: ${argsMap.word.toUpperCase()}`);
        let phonetics = wordData.phonetics.find(p => p.text);
        phonetics = phonetics ? phonetics.text : "N/A";

        output += boxen(
            `${wordTitle}\n🔊 Pronunciation: ${chalk.yellow(phonetics)}`,
            { padding: 1, margin: 1, borderStyle: "round" }
        ) + "\n";

        const terminalWidth = process.stdout.columns || 80;
        const table = new Table({
            head: [chalk.blue("Type"), chalk.green("Definition")],
            colWidths: [15, terminalWidth - 20],
            wordWrap: true,
        });

        let hasResults = false;

        meanings.forEach(meaning => {
            meaning.definitions.forEach(def => {
                const wrappedDefinition = wrapText(def.definition, terminalWidth - 20);
                table.push([meaning.partOfSpeech, wrappedDefinition]);
                hasResults = true;
            });
        });

        if (!hasResults) {
            output += chalk.red(`❌ No definitions found for "${argsMap.word}"\n`);
            return output;
        }

        output += table.toString() + "\n";

        meanings.forEach(meaning => {
            meaning.definitions.forEach(def => {
                let example = def.example || "No example available.";
                output += chalk.yellow.bold("\n📌 Example: ") + chalk.yellow(example) + "\n";
            });
        });

        meanings.forEach(meaning => {
            let synonyms = meaning.synonyms || [];
            if (synonyms.length > 0) {
                output += chalk.magenta.bold("\n🔗 Synonyms: ") + chalk.magenta(synonyms.join(", ")) + "\n";
            }
        });

        meanings.forEach(meaning => {
            let antonyms = meaning.antonyms || [];
            if (antonyms.length > 0) {
                output += chalk.red.bold("\n❌ Antonyms: ") + chalk.red(antonyms.join(", ")) + "\n";
            }
        });

        output += chalk.blueBright("\n📚 Enhance your vocabulary with this CLI dictionary tool!\n");
        output += chalk.blueBright(`Source: ${wordData.sourceUrls[0]}\n`);

        return output; 
    } catch (error) {
        spinner.stop();
        output += chalk.red("❌ Error fetching definition:") + " " + error.message + "\n";
        return output;
    }
}