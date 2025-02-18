const global = new Map();
function fibonnaci(n){
    const memo = new Map();  
        function fib(n) { 
        if (n <= 1) return n;  
        if (memo.has(n)) return memo.get(n);  
        const result = fib(n - 1) + fib(n - 2);  
        memo.set(n, result);
        global.set(n,result);  
        return result;  
    }
    if(global.has(n)) return global.get(n);
    return  fib(n);
}


console.time("fibonacci");
console.log(fibonnaci(60));
console.timeEnd("fibonacci");

console.time("fibonacci");
console.log(fibonnaci(50));
console.timeEnd("fibonacci");