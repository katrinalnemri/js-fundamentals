function race(arr) {
    let list = arr.shift().split(", ")
    let obj = {}
    for (let line of arr) {
        let digits = /\d/g
        let chars = /[A-Za-z]/g
        let name = line.match(chars).join("")
        if (name === "endofrace") {
            break;
        }
        let nums = Number(line.match(digits).reduce((a, b) => Number(a) + Number(b)))

        if (list.includes(name)) {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = nums
            } else {
                obj[name] += nums
            }
        }

    }

    let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
        .slice(0, 3)
    console.log(`1st place: ${sorted[0]}`)
    console.log(`2nd place: ${sorted[1]}`)
    console.log(`3rd place: ${sorted[2]}`)
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)