import { createReadStream} from "node:fs";
export class Transform{
    #filePath;
    constructor(filePath){
        this.#filePath = filePath;
    }
    start(){
        const stream = createReadStream(this.#filePath, "UTF-8");
        stream.on("data",(chunk) => console.log(`Chunk: ${chunk} \n\n\n\n\n\n ======================= \n\n\n\n\n\n`));
    }
}