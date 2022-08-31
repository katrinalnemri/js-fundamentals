function manOwar(input) {
    let pirateShipStatus = input.shift().split(">").map(Number)
    let warShipStatus = input.shift().split(">").map(Number)
    let maxHealth = Number(input.shift())
    let isEnd = false
    for (let line of input) {
        if (line === "Retire") {
            break;
        }
        line = line.split(" ")
        let command = line[0]
        if (command === "Fire") {
            let index = line[1]
            let damage = line[2]
            if (index >= 0 && index < warShipStatus.length) {
                warShipStatus[index] -= damage
                if (warShipStatus[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.")
                    isEnd = true
                    break;
                }
            }
        }
        if (command === "Defend") {
            let startIndex = line[1]
            let endIndex = line[2]
            let damage = line[3]
            if (startIndex >= 0 && endIndex < pirateShipStatus.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShipStatus[i] -= damage
                    if (pirateShipStatus[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.")
                        isEnd = true
                        break;
                    }
                }
            }
        }
        if (command === "Repair") {
            let index = line[1]
            let healthAdded = Number(line[2])
            if (index >= 0 && index < pirateShipStatus.length) {
                pirateShipStatus[index] = pirateShipStatus[index] + healthAdded
                if (pirateShipStatus[index] > maxHealth) {
                    pirateShipStatus[index] = maxHealth
                }
            }
        }
        if (command === "Status") {
            let count = 0
            pirateShipStatus.forEach(ship => {
                if (ship < maxHealth * 0.2) {
                    count++
                }
            })
            console.log(`${count} sections need repair.`)
        }
        if (isEnd) {
            break;
        }
    }
    if (!isEnd && pirateShipStatus.reduce((a, b) => a + b) > 0 && warShipStatus.reduce((a, b) => a + b) > 0) {
        console.log(`Pirate ship status: ${pirateShipStatus.reduce((a, b) => a + b, 0)}`)
        console.log(`Warship status: ${warShipStatus.reduce((a, b) => a + b, 0)}`)
    }
}
manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])






