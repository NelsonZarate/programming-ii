function* countToThree(beggining,end) {
    for (let num = beggining; num <= end; num++) {
        yield num;
    }
}

let run = true;
const generator2 = countToThree(-10,20);

while (run) {
    let objeto = generator2.next();
    if (objeto.done == true) {
        run = false;
        break;
    }
    console.log(objeto.value);
}