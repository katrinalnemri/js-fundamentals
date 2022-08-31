function bombNumbers(numbers, z) {
    let [bomb, power] = z;

    while (numbers.includes(bomb)) {
        let c = numbers.indexOf(bomb);
        let a = c - power;
        let b = power * 2 + 1;
        if (a < 0) {
            b += a;
            a = 0;
        }
        numbers.splice(a, b);
    }
    numbers = numbers.reduce((a, b) =>
        a + b, 0
    )
    console.log(numbers)
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 7]
)