function factorialDivision(a, b) {
    let sumA = 1;
    for (let i = 1; i <= a; i++) {
        sumA *= i;
    }
    let sumB = 1;
    for (let j = 1; j <= b; j++) {
        sumB *= j;
    }
    let result = sumA / sumB;
    console.log(result.toFixed(2))
}

factorialDivision(6, 2)