function schoolGrades(arr) {
    let list = new Map()

    for (let student of arr) {
        student = student.split(" ")
        let name = student.shift()
        let grades = student.map(Number)

        if (!list.has(name)) {
            list.set(name, [])
        }
        list.set(name, list.get(name).concat(grades))
    }
    for (let [name, grades] of [...list.entries()]) {
        let averageGrade = 0
        grades.forEach(grade => {
            averageGrade += grade
        })
        averageGrade = averageGrade / grades.length
        list.set(name, list.get(name).concat(averageGrade))
    }
    let sorted = Array.from(list).sort((a, b) => a[1][a[1].length - 1] - b[1][b[1].length - 1]).forEach(el => {
        el[1].pop()
        console.log(`${el[0]}: ${el[1].join(", ")}`)
    })

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)