function wordsTracker(arr) {
    let words = arr.shift().split(" ");
    let wordsObj = {};

    for (let el of words) {
        wordsObj[el] = 0;
    }

    for (let w of arr) {
        if (wordsObj.hasOwnProperty(w)) {
            wordsObj[w]++;
        }
    }
    let entries = Object.entries(wordsObj).sort((a, b) => {
        return b[1] - a[1];
    });

    entries.forEach((el) => {
        console.log(`${el[0]} - ${el[1]}`)
    })
}

wordsTracker([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurances',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task'
]
)