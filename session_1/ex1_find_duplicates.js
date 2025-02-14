function findDuplicates(array_duplicado){
    let array_ordenado = [];
    for(i = 0 ; i < array_duplicado.length; i++){
        if(array_duplicado[i] !== array_duplicado[i+1]){
            array_ordenado.push(array_duplicado[i])
        }
    }
    return array_ordenado;
}

console.log(findDuplicates([1,2,3,4,4,4,4,6,7,7]));
