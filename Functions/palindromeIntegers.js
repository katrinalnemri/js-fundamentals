function palindrome(arr) {
    for (let number of arr) {
        let reversed = "";
        number = number.toString();
        for (let i = number.length - 1; i >= 0; i--) {
            reversed += number[i];
        }
        if (reversed === number) {
            console.log("true");
        } else {
            console.log("false")
        }
    }
}

palindrome([123, 323, 421, 121])