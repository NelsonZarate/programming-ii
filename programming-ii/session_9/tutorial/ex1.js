const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    transports: [
        new winston.transports.File({
            filename: "cenas.log",
        }),
    ],
});

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.MyMessage = message;
        logger.error(`Validation error: ${this.MyMessage}`); 
    }
}

try {
    const cenas = false;
    if (!cenas) {
        logger.error("ValidationError ");
        throw new ValidationError("error is bananas");
    }
} catch (e) {
    if (e instanceof ValidationError) {
        logger.error("Caught ValidationError", e);
        console.info("ValidationError");
    } else {
        logger.error("An error occurred", e); 
        throw new Error("Normal Error");
    }
}
