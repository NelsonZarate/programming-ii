const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

class ValidationFile extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationFile";
        this.MyMessage = message;
        logger.error(`Validation error: ${this.MyMessage}`);
    }
}

try {
    const fs = require("node:fs");

    function countWords(filename) {
        const checkfile = (filename) => {
            if (!filename) {
                logger.error("Validation File name");
                throw new ValidationFile("Filename is required");
            }
            return filename;
        };
        checkfile(filename);

        const txtData = fs.readFileSync(filename, "utf-8");
        const checkData = (txtData) => {
            if (txtData.length <= 2) {
                logger.error("Validation data content");
                throw new ValidationFile("The file doesn’t contain enough data");
            }
            return txtData;
        };
        checkData(txtData); 
        const values = txtData.replace(/[^\w\s]/g, "");
        const trueValues = values.split(" ");
        const words = trueValues.length;
        return words;
    }

    const file = "/workspaces/programming-ii/session_9/poem.txt";  
    console.log(countWords(file)); 

} catch (e) {
    console.log("Caught error:", e);
    if (e instanceof ValidationFile) {
        logger.error("Caught ValidationFile: filename is not valid", e);
        console.info("ValidationFile: Filename is not valid");
    } else {
        logger.error("An error occurred", e);
        console.error("Caught generic error", e);
    }
}
