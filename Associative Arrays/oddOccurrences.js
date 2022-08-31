function oddOccurrences(str) {
    let words = str.toLowerCase().split(" ");

    let wordsObj = {};

    for (let w of words) {
        wordsObj[w] = 0;
    }
    for (let w of words) {
        if (wordsObj.hasOwnProperty(w)) {
            wordsObj[w]++;
        }
    }
    let entries = Object.entries(wordsObj);
    let result = [];
    //console.log(entries[1])
    entries.forEach((el) => {
        if (el[1] % 2 !== 0) {
            result.push(el[0])
        }
    })
    console.log(result.join(" "))
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')