function finalRequest(input) {
    let msg = input.shift().split(" ")
    for (let line of input) {
        if (line === "Stop") {
            console.log(msg.join(" "))
            break;
        }
        line = line.split(" ")
        let command = line[0]
        if (command === "Delete") {
            let index = Number(line[1]) + 1
            if (index >= 0 && index < msg.length) {
                msg.splice(index, 1)
            }
        }
        if (command === "Swap") {
            let word1 = line[1]
            let word2 = line[2]
            let word1Index = msg.indexOf(word1);
            let word2Index = msg.indexOf(word2);
            if (msg.includes(word1) && msg.includes(word2)) {
                [msg[word1Index], msg[word2Index]] = [msg[word2Index], msg[word1Index]]
            }
        }
        if (command === "Put") {
            let word = line[1]
            let index = Number(line[2]) - 1
            if (index >= 0 && index <= msg.length) {
                msg.splice(index, 0, word)
            }
        }
        if (command === "Sort") {
            msg.sort((a,b) => b.localeCompare(a))
        }
        if (command === "Replace") {
            let word1 = line[1]
            let word2 = line[2]
            if (msg.includes(word2)) {
                let word2Index = msg.indexOf(word2)
                msg.splice(word2Index, 1, word1)
            }
        }
    }
}
finalRequest(["This the my quest! final",
    "Put is 1",
    "Swap final quest!",
    "Delete 2",
    "Stop"])





