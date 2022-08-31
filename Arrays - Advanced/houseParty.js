function houseParty(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, sep, com] = arr[i].split(" ");
        if (com === "not") {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            list = list.filter(x => x != name)
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            list.push(name);
        }
    }
    console.log(list.join("\n"))
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

)