function smallestTwoNumbers(arr) {
    arr.sort((a, b) => (a - b))
    let a = arr.shift();
    let b = arr.shift();
    console.log(a, b)
}
smallestTwoNumbers([30, 15, 50, 5])