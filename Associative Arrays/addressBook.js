function addressBook(arr) {
    let obj = {}

    for (let line of arr) {
        line = line.split(":")
        obj[line[0]] = line[1]
    }

    Object.keys(obj).sort((a, b) => a.localeCompare(b)).forEach(el => {
        console.log(`${el} -> ${obj[el]}`)
    })
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)