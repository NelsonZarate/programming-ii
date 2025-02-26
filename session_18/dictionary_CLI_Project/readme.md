# CLI Dictionary

A simple command-line dictionary tool to look up word definitions, synonyms, antonyms, and get the word of the day.

## Installation

```sh
npm install
```

## Usage

Run the CLI with the following commands:

```sh
node main.js --word <word>    # Get definition of a word
node main.js --wotd           # Get the word of the day
node main.js --help           # Show help menu
```

### Options

- `--word <word>`  → Look up a word’s definition.
- `--type <type>`  → Filter results by type (noun, verb, etc.).
- `--output <file>` → Save results to a file.
- `--wotd`  → Get the word of the day.
- `--help`  → Show help menu.

## Example

```sh
node main.js --word example
node main.js --word hello --output result.txt
node main.js --wotd
```

## API Selection (2 Points)

### Chosen API
selected the **Free Dictionary API** (`https://api.dictionaryapi.dev/`), which does not require authentication.

### Justification
This API is useful because it provides detailed word definitions, phonetics, synonyms, antonyms, and example sentences. It enhances the CLI dictionary by offering rich linguistic data without requiring API keys or rate limits. This makes it easy to integrate and use in a command-line tool for vocabulary expansion.

## License
MIT

