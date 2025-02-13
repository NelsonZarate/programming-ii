
console.time("fibo");
function find_fibonacci(num){
    let num1 = 0 ;
    let num2 =1 ;
    let fibonacci;
    for(let i = 0; i < num; i++){
        fibonacci = num1 + num2;
        num2 = num1;
        num1 = fibonacci;
    }
    return fibonacci;

}
console.log(find_fibonacci(1000));

console.timeEnd("fibo");