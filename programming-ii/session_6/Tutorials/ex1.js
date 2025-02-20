
console.time("factorial");
function factorial(n) {  
    if (n === 0) return 1; // Base case  
    return n * factorial(n - 1);  
  }  
  console.log(factorial(10)); // 120  

console.timeEnd("factorial");


const memo = new Map();  
function fib(n) { 
  if (n <= 1) return n;  
  if (memo.has(n)) return memo.get(n);  
  const result = fib(n - 1) + fib(n - 2);  
  memo.set(n, result);  
  return result;  
} 
console.time("fibonacci");
console.log(fib(60));

console.timeEnd("fibonacci");

console.time("fibonacci2");
console.log(fib(50));
console.timeEnd("fibonacci2");