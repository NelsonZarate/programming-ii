import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

/**
 * Processes a file to count characters and lines.
 */
export class Transform {
  #filePath;
  
  /**
   * Creates a Transform instance.
   * 
   * @param {string} filePath - The path to the file to process.
   */
  constructor(filePath) {
    this.#filePath = filePath;
  }

  /**
   * Starts processing the file and counts characters and lines.
   */
  start() {
    let charCount = 0;
    let lineCount = 0;
    
    const stream = createReadStream(this.#filePath, "utf8");
    const rl = createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    stream.on("data", (chunk) => {
      charCount += chunk.length;
    });

    rl.on("line", () => {
      lineCount++;
    });

    rl.on("close", () => {
      console.log(`Characters: ${charCount}, Lines: ${lineCount}`);
    });

    stream.on("error", (err) => {
      console.error("Error:", err);
    });
  }
}