const WrongTypes= [
    "string","function","object","undefined","null"
];

export function sum(a,b){
    return a + b;
}

export function substract(num1,num2){
    if(typeof num1 === "boolean"|| typeof num2 === "boolean" )
        throw new Error(` is boolean `);

    if(num1 === null || num2 === null)
        throw new Error(`is null `);
    
    if(num1 === undefined || num2 === undefined)
        throw new Error(`is undefined `);
    
    if(isNaN(num1) || isNaN(num2))
        throw new Error(`is NaN`);
    
    if(WrongTypes.includes(typeof num1) || WrongTypes.includes(typeof num2))
        throw new Error(" not possible");

    if( typeof num1 != "number" || typeof num2 != "number")
        throw new Error(" not possible");
            
    return num1 - num2;
}