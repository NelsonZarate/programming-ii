const maxCapacity = new Map();
maxCapacity.set(0, 0); 

function knapsack(items, capacity) {
    items.forEach(item => {
        const currentWeights = Array.from(maxCapacity.keys());

        currentWeights.forEach(weight => {
            const newWeight = weight + item.weight;
            if (newWeight <= capacity) {
                const newValue = item.value + maxCapacity.get(weight);
                maxCapacity.set(newWeight, Math.max(newValue, maxCapacity.get(newWeight) || 0));
            }
        });
    });

    return maxCapacity.has(capacity) ? `Para a capacidade ${capacity}, a soma dos valores dos itens é ${maxCapacity.get(capacity)}` : "Não é possível fazer tal cálculo";
}

const generateRandomItems = (numItems) => {
    const items = [];
    const valuesSet = new Set();

    for (let i = 0; i < numItems; i++) {
        const weight = Math.floor(Math.random() * 4) + 1;
        let value;
        do {
            value = Math.floor(Math.random() * 20) + 1; 
        } while (valuesSet.has(value)); 
        valuesSet.add(value);
        items.push({ weight, value });
    }
    return items;
};

const items = generateRandomItems(1000);

items.sort((a, b) => {
    if (b.value !== a.value) {
        return b.value - a.value;
    }
    return a.weight - b.weight; 
});

console.log("Itens gerados:", items.slice(0, 1000)); 

const capacity = 3; 
console.log(knapsack(items, capacity)); 
