import { validateArgs, removeAnsiCodes } from "./helpers.js";
import { strict as assert } from "assert";
import { getWordOfTheDay } from "./wotd.js";


describe("Helper Functions", function() {
    it("should validate a correct word argument", function() {
        assert.doesNotThrow(() => validateArgs("test"));
    });

    it("should throw error for invalid word argument", function() {
        assert.throws(() => validateArgs(""), /must be a word/);
    });

    it("should remove ANSI codes from a string", function() {
        const coloredText = "\x1b[31mHello\x1b[0m";
        assert.equal(removeAnsiCodes(coloredText), "Hello");
    });
});

