function memo(number) {
    let global = new Map();
    function* countToThree(number) {
        let count = 0;
        for (let num of number) {
            if (num % 2 === 0 && count < 3) {
                if (!global.has(num)) {
                    global.set(num, num);
                    yield num;
                    count++;
                }
            }
        }
    }

    const generator = countToThree(number);
    return { generator, global };
}

const { generator, global } = memo([1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 33, 3, 3, 2]);

let run = true;

while (run) {
    let objeto = generator.next();
    if (objeto.done) {
        run = false;
        break;
    }
    console.log(objeto.value);
}

console.log('Global Map:', global);
