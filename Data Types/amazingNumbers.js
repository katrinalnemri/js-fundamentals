function amazingNumbers(num) {
    let sum = 0;
    for (let i = 0; i < num.toString().length; i++) {
        sum += Number(num.toString()[i]);
    }
    let result = sum.toString().includes('9') ? 'True' : 'False';
    console.log(`${num} Amazing? ${result}`)
}
amazingNumbers(999)