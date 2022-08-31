function reverseString(word) {

    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        reversed += letter;
    }
    console.log(reversed)
}
reverseString("1234");