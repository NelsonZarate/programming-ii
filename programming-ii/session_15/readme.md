# Log File Analyzer

A Node.js project for analyzing log or CSV files. It counts the total number of characters and lines in a file efficiently, even for large files (1GB+).

## Features

- **Character Counting**: Accurately counts all characters in the file, including spaces and special characters.
- **Line Counting**: Counts the total number of lines in the file.
- **Stream-Based**: Uses Node.js streams for memory efficiency, making it suitable for large files.
- **Error Handling**: Gracefully handles file read errors.
