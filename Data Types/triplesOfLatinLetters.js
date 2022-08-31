function triplesOfLatinLetters(num) {

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let a = String.fromCharCode(97 + i);
                let b = String.fromCharCode(97 + j);
                let c = String.fromCharCode(97 + k);
                console.log(`${a}${b}${c}`)
            }
        }
    }
}
triplesOfLatinLetters(2)