function arrayManipulations(input) {
    let arr = input.shift().split(" ");
    for (let i = 0; i < input.length; i++) {
        let command, num, index;
        let line = input[i].split(" ");
        command = line[0];
        if (command === "Add") {
            num = line[1];
            arr.push(num);
        }
        if (command === "Remove") {
            num = line[1];
            arr = arr.filter(function (x) {
                return x !== num;
            });
        }
        if (command === "RemoveAt") {
            index = line[1];
            arr.splice(index, 1);
        }
        if (command === "Insert") {
            number = line[1];
            index = line[2];
            arr.splice(index, 0, number)
        }
    }
    console.log(arr.join(" "))
}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)