function wordOccurences(arr) {
    let obj = {}

    for (let word of arr) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 1
        } else {
            obj[word] += 1
        }
    }

    Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(word => {
        console.log(`${word[0]} -> ${word[1]} times`)
    })
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])