function division(num) {
    let numbers = [2, 3, 6, 7, 10];
    isDivisble = false;
    let b = "";
    for (let i = 0; i < numbers.length; i++) {
        let a = numbers[i];
        if (num % a === 0) {
            b = a;
            isDivisble = true;
        }
    }
    if (isDivisble) {
        console.log(`The number is divisible by ${b}`)
    } else {
        console.log('Not divisible');
    }
}
division(15)