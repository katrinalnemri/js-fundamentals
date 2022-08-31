function treasureHunt(input) {
    let list = input.shift().split("|")
    for (let line of input) {
        if (line === "Yohoho!") {
            break;
        }
        line = line.split(" ")
        let command = line.shift()
        if (command === "Loot") {
            line.forEach(el => {
                if (!list.includes(el)) {
                    list.unshift(el)
                }
            })
        }
        if (command === "Drop") {
            let index = line[0]
            if (index >= 0 && index <= list.length) {
                let removed = list.splice(index, 1)
                list.push(removed)
            }
        }
        if (command === "Steal") {
            let count = line[0]
            let stolen = []
            while (count > 0 && list.length > 0) {
                stolen.push(list.pop())
                count--
            }
            console.log(stolen.reverse().join(", "))
        }
    }
    if (list.length > 0) {
        let sum = 0
        list.forEach(treasure => {
            let nameL = treasure.length
            sum += nameL
        })
        let average = sum / list.length
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])