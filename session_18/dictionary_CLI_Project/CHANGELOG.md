# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  

## [1.0.0] - 2025-02-25

### Added
- Added support for multiple output formats: **TXT** and **JSON**.
- Added `--help` flag for detailed CLI usage instructions.
- Integrated unit tests for core functionality to ensure stability.
- Introduced a **Word of the Day** feature to display a new word each day.
- Enhanced error handling for API failures, improving user experience.
- Implemented Git versioning best practices, including tags and changelog management.

### Changed
- Refactored and optimized the code for better modularity.
- Improved the handling of edge cases when interacting with the word definition API.
- Updated documentation with more examples and clearer instructions.
- Revised CLI output for better formatting and clarity.

### Fixed
- Fixed an issue where the output would not save to a file under certain conditions.
- Corrected a bug where API failures were not handled gracefully, causing crashes.
- Fixed missing help instructions for some CLI commands.

### Removed
- Removed redundant code and deprecated features to streamline the codebase.

## [1.1.0] - 2025-02-26

### Added
- CLI functionality to fetch and display word definitions.
- `Word of the Day` feature.
- Output file saving functionality.
- Support for saving outputs in **TXT** and **JSON** formats.
- Help flag for CLI (`--help`) to display usage instructions.

### Changed
- Improved error handling for API failures.
- Refactored code for modularity and better maintainability.
- Updated documentation with examples.

### Fixed
- Fixed file saving issue in specific scenarios.
- Addressed API handling for edge cases.
- Enhanced CLI usage instructions.

### Removed
- Removed unused and redundant code.
