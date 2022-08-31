function neighborhoods(arr) {
    let obj = {}
    let list = arr.shift().split(", ")

    for (let neighborhood of list) {
        obj[neighborhood] = []
    }
    for (let line of arr) {
        let [neighborhood, name] = line.split(" - ")
        if (list.includes(neighborhood)) {
            obj[neighborhood].push(name)
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1].length - a[1].length)

    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1].length}`)
        line[1].forEach(element => {
            console.log(`--${element}`)
        });
    }

}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Herald Street - Keity',
    'Abbey Street - Liam',
    'Bright Mews - Mark',
    'Abbey Street - John']

)