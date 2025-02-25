import fs from 'node:fs';
import path from "path";
import fetch from 'node-fetch';

const WOTD_FILE = path.join(process.cwd(), "wotd.json");

/**
 * Fetches a random word from the Random Word API.
 * @returns {Promise<string>} - A random word.
 */
async function fetchRandomWord() {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    if (!response.ok) {
        throw new Error(`Failed to fetch random word: ${response.statusText}`);
    }
    const [word] = await response.json();
    return word;
}

/**
 * Fetches and stores a word of the day.
 * @returns {Promise<string>} - The word of the day.
 */
export async function getWordOfTheDay() {
    if (fs.existsSync(WOTD_FILE)) {
        const data = JSON.parse(fs.readFileSync(WOTD_FILE, "utf8"));
        const today = new Date().toISOString().split("T")[0];

        if (data.date === today) {
            return data.word;
        }
    }

    const word = await fetchRandomWord();
    fs.writeFileSync(WOTD_FILE, JSON.stringify({ date: new Date().toISOString().split("T")[0], word }, null, 2));
    return word;
}