function stringSubstring(word, text) {
    let wantedWord = word.toLowerCase()
    let formattedText = text.toLowerCase()
    let bool = true
    for (let wordD of formattedText.split(" ")) {
        if (wordD === wantedWord) {
            console.log(word)
            bool = false
            break;
        }
    }
    if (bool) {
        console.log(`${word} not found!`)
    }
}

stringSubstring('javascript',
    'JavaScript is best javascript programming language'
)