import { getWordDefinition } from "./api_call.js";
import Table from "cli-table3";
import chalk from "chalk";
import boxen from "boxen";
import ora from "ora";

export async function dictionary(argsMap) {
    // Default word if not provided
    if (!argsMap.word) {
        argsMap.word = "hello";
    }

    const spinner = ora(chalk.cyan(`Searching for "${argsMap.word}"...`)).start();

    try {
        let data = await getWordDefinition(argsMap.word);
        spinner.stop();

        if (!data || data.length === 0) {
            console.log(chalk.red(`❌ No meanings found for: "${argsMap.word}"`));
            return;
        }

        let meanings = data[0].meanings;
        let wordTitle = chalk.blue.bold(`📖 Word ${argsMap.word.toUpperCase()}`);
        let phonetics = data[0].phonetics.find(p => p.text)?.text || "N/A";

        console.log(boxen(
            `${wordTitle}\n🔊 Pronunciation: ${chalk.yellow(phonetics)}`,
            { padding: 1, margin: 1, borderStyle: "round" }
        ));

        // Initialize table
        let table = new Table({
            head: [chalk.blue("Type"), chalk.green("Definition")],
            colWidths: [15, 60],
        });

        if (argsMap.type) {
            // Filter meanings by type
            let filteredMeanings = meanings.filter(m => m.partOfSpeech === argsMap.type);
            
            if (filteredMeanings.length === 0) {
                console.log(chalk.red(`❌ No definitions found for "${argsMap.word}" as a "${argsMap.type}"`));
                return;
            }

            filteredMeanings.forEach(meaning => {
                table.push([meaning.partOfSpeech, meaning.definitions[0].definition]);
            });
        } else {
            // Display all meanings
            meanings.forEach(meaning => {
                table.push([meaning.partOfSpeech, meaning.definitions[0].definition]);
            });
        }

        console.log(table.toString());

        // Show example sentences
        let example = meanings[0]?.definitions[0]?.example || "No example available.";
        console.log(chalk.yellow.bold("\n📌 Example: ") + chalk.yellow(example));

        // Show synonyms if available
        let synonyms = meanings[0]?.synonyms || [];
        if (synonyms.length > 0) {
            console.log(chalk.magenta.bold("\n🔗 Synonyms: ") + chalk.magenta(synonyms.join(", ")));
        }

        console.log(chalk.blueBright("\n📚 Enhance your vocabulary with this CLI dictionary tool!"));

    } catch (error) {
        spinner.stop();
        console.log(chalk.red("❌ Error fetching definition:"), error);
    }
}
