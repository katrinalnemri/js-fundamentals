function pascalCase(str) {
    let newStr = str.toLowerCase();
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== newStr[i]) {
            if (i === 0) {
                word += str[i]
            } else {
                word = word + ' ' + str[i]
            }
        }
        else {
            word = word + newStr[i]
        }
    }
    word = word.split(" ")
    console.log(word.join(", "))
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')