function sumDigits(num) {
    let sum = 0;
    for (let i = 0; i < num.toString().length; i++) {
        sum += Number(num.toString()[i]);
    }
    console.log(sum)
}
sumDigits(543)