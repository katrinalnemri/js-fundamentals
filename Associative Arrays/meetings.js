function meetings(arr) {
    let list = {}

    for (let line of arr) {
        line = line.split(" ")
        if (!list.hasOwnProperty(line[0])) {
            list[line[0]] = line[1]
            console.log(`Scheduled for ${line[0]}`)
        } else {
            console.log(`Conflict on ${line[0]}!`)
        }
    }
    for (let key in list) {
        console.log(`${key} -> ${list[key]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)