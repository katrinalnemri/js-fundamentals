function worldTour(input) {
    let str = input.shift()
    for (let line of input) {
        if (line === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${str}`)
        }
        line = line.split(":")
        let command = line[0]
        if (command === "Add Stop") {
            let index = line[1]
            let string = line[2]
            if (index <= str.length && index >= 0) {
                str = str.substring(0, index) + string + str.substring(index)
            }
            console.log(str)
        }
        if (command === "Remove Stop") {
            let startIndex = line[1]
            let endIndex = Number(line[2]) + 1
            if (startIndex >= 0 && endIndex <= str.length) {
                let removed = str.substring(startIndex, endIndex)
                str = str.replace(removed, "")
            }
            console.log(str)
        }
        if (command === "Switch") {
            let oldStr = line[1]
            let newStr = line[2]
            if (str.includes(oldStr)) {
                str = str.replace(oldStr, newStr)
            }
            console.log(str)
        }
    }
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:20:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)