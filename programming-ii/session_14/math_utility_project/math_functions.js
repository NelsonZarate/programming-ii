/**
 * Calculates the sum of an array of numbers.
 * 
 * @param {number[]} num - The array of numbers to sum.
 * @returns {string} A string indicating the sum of the numbers.
 */
export function sum(num) {
    let sumNum = 0;
    num.forEach((numbers) => {
        sumNum += numbers;
    });
    return (`This is the sum of the numbers: ${sumNum}`);
}

/**
 * Calculates the average of an array of numbers.
 * 
 * @param {number[]} num - The array of numbers to calculate the average.
 * @returns {string} A string indicating the average of the numbers.
 */
export function average(num) {
    let averageNum = sum(num) / num.length;
    return (`This is the average of the numbers: ${averageNum}`);
}

/**
 * Calculates the median of an array of numbers.
 * 
 * @param {number[]} num - The array of numbers to calculate the median.
 * @returns {string} A string indicating the median of the numbers.
 */
export function median(num) {
    num.sort((a, b) => a - b); // Sort the numbers in ascending order
    if (num.length % 2 === 1) {
        // If odd length, return the middle element
        let calc = num[Math.floor(num.length / 2)];
        return (`This is the median of the numbers: ${calc}`);
    } else {
        // If even length, return the average of the two middle elements
        const mid1 = num[num.length / 2 - 1];
        const mid2 = num[num.length / 2];
        let calc = (mid1 + mid2) / 2;
        return (`This is the median of the numbers: ${calc}`);
    }
}
