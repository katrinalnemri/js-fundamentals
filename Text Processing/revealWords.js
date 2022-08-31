function revealWords(replacement, sentence) {
    let splitedSentence = sentence.split(" ")
    replacement = replacement.split(", ")
    replacement.forEach(el => {
        splitedSentence.forEach(word => {
            if (word.includes('*') && word.length === el.length) {
                sentence = sentence.replace(word, el)
            }
        })
    });
    console.log(sentence)
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'

)