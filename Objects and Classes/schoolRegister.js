function schoolRegister(arr) {
    let list = {}
    let line = arr.map(line => {
        return line.split(", ")
    });
    for (let x of line) {
        let name = x[0].split(": ")[1]
        let grade = x[1].split(": ")[1]
        let score = x[2].split(": ")[1]
        if (score > 3) {
            if (!list.hasOwnProperty(grade)) {
                list[grade] = {}
            }
            if (!list[grade].hasOwnProperty("students")) {
                list[grade].students = []
                list[grade].students.push(name)
            } else {
                list[grade].students.push(name)
            }
            if (!list[grade].hasOwnProperty("score")) {
                list[grade].score = 0
                list[grade].score += Number(score)
            } else {
                list[grade].score += Number(score)
            }
        }
    }
    let entries = Object.entries(list)
    entries.sort((a, b) => {
        return a[0] - b[0]
    })
    for (let entry of entries) {
        let entryValues = Object.values(entry[1])
        let names = entryValues[0]
        let averageScore = entryValues[1] / names.length
        let nextGrade = Number(entry[0]) + 1
        console.log(`${nextGrade} Grade `)
        console.log(`List of students: ${names.join(", ")}`)
        console.log(`Average annual grade from last year: ${averageScore.toFixed(2)}`)
        console.log("")
    }
}



schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]


)