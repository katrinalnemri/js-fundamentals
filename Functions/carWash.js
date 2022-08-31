function carWash(arr) {
    let value = 0;
    for (let command of arr) {
        if (command === "soap") {
            value += 10;
        } else if (command === "water") {
            value *= 1.2;
        } else if (command === "vacuum cleaner") {
            value *= 1.25;
        } else if (command === "mud") {
            value *= 0.9;
        }
        if (value > 100) {
            value = 100;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])