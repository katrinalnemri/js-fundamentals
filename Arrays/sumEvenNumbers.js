function sumEvenNumbers(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }
    console.log(sum)
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])