function integerAndFloat(first, second, third) {
    let sum = first + second + third;
    let result = sum === parseInt(sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${result}`);
}
integerAndFloat(9, 100, 1.1)