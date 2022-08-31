function archeryChampion(input) {
    let field = input.shift().split("|").map(Number)
    let points = 0
    for (let line of input) {
        if (line === "Game over") {
            console.log(field.join(" - "))
            console.log(`John finished the archery tournament with ${points} points!`)
            break
        }
        let [command, direction, index, length] = line.split(/[\s\@]+/g)
        index = Number(index)
        length = Number(length)
        if (command === "Shoot") {
            if (index >= 0 && index < field.length) {
                if (direction === "Left") {
                    let newIndex = index - length
                    while (newIndex < 0) {
                        newIndex += field.length
                    }
                    if(field[newIndex] > 0){
                    if (field[newIndex] < 5) {
                        field[newIndex] = 0
                    } else {
                        field[newIndex] -= 5
                    }
                    points += 5
                }
                }
                if (direction === "Right") {
                    let newIndex = index + length
                    while (newIndex >= field.length) {
                        newIndex -= field.length
                    }
                    if(field[newIndex] > 0){
                    if (field[newIndex] < 5) {
                        field[newIndex] = 0
                    } else {
                        field[newIndex] -= 5
                    }
                    points += 5
                }
                }
            }
        }
        if (command === "Reverse") {
            field = field.reverse()
        }
    }
}
archeryChampion(["20|30|40|50|60",
"Shoot Left@0@12",
"Shoot Right@4@15",
"Shoot Left@6@5",
"Reverse",
"Game over"])




