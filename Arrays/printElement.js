function printElement(arr) {

    let n = Number(arr.pop());
    let numbers = [];
    for (let i = 0; i <= arr.length - 1; i++) {

        if (i % n === 0) {
            numbers.push(arr[i])
        }
    }
    console.log(numbers.join(" "))
}
printElement(['5', '20', '31', '4', '20', '2'])
