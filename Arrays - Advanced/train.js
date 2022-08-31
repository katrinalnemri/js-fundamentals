function train(input) {
    let wagons = input.shift().split(" ");
    let wagonCapacity = input.shift();

    for (let i = 0; i < input.length; i++) {
        let passengers = input[i].split(" ")
        let command, num;
        if (passengers.length > 1) {
            command = passengers[0];
            num = passengers[1];
            if (command === "Add") {
                wagons.push(num);
            }
        } else {
            num = Number(passengers[0]);
            for (let j = 0; j < wagons.length; j++) {
                let wagon = Number(wagons[j]);
                if (wagon + num <= Number(wagonCapacity)) {
                    wagons[j] = num + wagon;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "))
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

)