function modernTimesOfHashtag(str) {
    str = str.split(" ")
    for (let word of str) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substring(1)
            let bool = true
            for (let letter of word) {
                letter = letter.toLowerCase()
                if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) {
                    bool = false;
                    break;
                }
            }
            if (bool) {
                console.log(word)
            }
        };
    }
}

modernTimesOfHashtag('Nowadays everyone uses # to tag a #spec1ial word in #socialMedia')