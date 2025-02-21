import {sum,substract} from "./math.js";

test("two plus two ", () => {
    expect(2 + 2).toBe(4);
});

test("two plus two ", () => {
    expect(sum(1 , 2)).toBe(3);
});

test("substract undefined",()=> {
    let num1 = undefined;
    let num2 = 2;
    expect(()=>substract(num1,num2)).toThrow(Error);
});
test("substract ( null - null) = error ",()=> {
    let num1 = null;
    let num2 = null;
    expect(()=>substract(num1,num2)).toThrow(Error);
});

test("substract (false - 2) = error",()=> {
    let num1 = false;
    let num2 = 2;
    expect(()=> substract(num1,num2)).toThrow(Error);
});

test("substract (2 - true) = error",()=> {
    let num1 = 2;
    let num2 = true;
    expect(()=> substract(num1,num2)).toThrow(Error);
});

test("substract (true - 2) = error",()=> {
    let num1 = true;
    let num2 = 2;
    expect(()=> substract(num1,num2)).toThrow(Error);
});

test("substract (2 - true) = error",()=> {
    let num1 = 2;
    let num2 = false;
    expect(()=> substract(num1,num2)).toThrow(Error);
});

test("substract (Nan - 2) = error",()=> {
    let num1 = NaN;
    let num2 = 2;
    expect(()=> substract(num1,num2)).toThrow(Error);
});

test("substract (2,2) = 0",()=> {
    let num1 = 2;
    let num2 = 2;
    let result = substract(num1,num2);
    let expectedResult = 0;
    expect(result).toBe(expectedResult);
});