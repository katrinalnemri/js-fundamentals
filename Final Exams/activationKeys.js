function activationKeys(arr) {
    let activationKey = arr.shift()

    for (let line of arr) {
        if (line === "Generate") {
            console.log(`Your activation key is: ${activationKey}`)
            break;
        }
        line = line.split(">>>")
        let command = line[0]
        if (command === "Contains") {
            let substring = line[1]
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`)
            } else {
                console.log('Substring not found!')
            }
        }
        if (command === "Flip") {
            let subCommand = line[1]
            let startIndex = line[2]
            let endIndex = line[3]
            let str = activationKey.substring(startIndex, endIndex)
            if (subCommand === "Upper") {
                let upperStr = str.toUpperCase()
                activationKey = activationKey.replace(str, upperStr)
            }
            if (subCommand === "Lower") {
                let lowerStr = str.toLowerCase()
                activationKey = activationKey.replace(str, lowerStr)
            }
            console.log(activationKey)
        }
        if (command === "Slice") {
            let startIndex = line[1]
            let endIndex = line[2]
            let slice = activationKey.substring(startIndex, endIndex)
            activationKey = activationKey.replace(slice, "")
            console.log(activationKey)
        }
    }
}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])

