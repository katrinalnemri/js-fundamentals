function replaceRepeatingChars(str) {

    let result = ''
    for (let letter of str) {
        if (letter !== result[result.length - 1]) {
            result += letter
        }
    }
    console.log(result)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')