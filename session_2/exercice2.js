function maxProductBruteForce(arr) {
    let maxProduct = -Infinity; 
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const product = arr[i] * arr[j];
            if (product > maxProduct) {
                maxProduct = product; 
            }
        }
    }
    return maxProduct; 
}


function maxProductSorted(arr) {
    arr.sort((a, b) => a - b); 

    const product1 = arr[0] * arr[1];
    const product2 = arr[arr.length - 1] * arr[arr.length - 2]; 
    
    return Math.max(product1, product2); 
}
