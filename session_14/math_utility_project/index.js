import { sum,average,median } from "./math_functions.js";
const args = process.argv.slice(2);
const [command, nums] = args;
const num = nums.
    split(",")
    .map((arg) => parseInt(arg));

try{
    switch(command){
        case "sum": 
            console.log(sum(num));
            break;
        case "average":
            console.log(average(num));
            break;
        case "median":
            console.log(median(num));
           break;
        default:
            throw new Error("command not found please try { (sum, average,median), (number) }");
    }
}catch(error){
    console.log(error);
}
