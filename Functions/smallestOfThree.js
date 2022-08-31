function smallestOfThree(a, b, c) {
    let min = Number.MAX_SAFE_INTEGER;
    let newArr = [a, b, c];
    for (let num of newArr) {
        if (min > num) {
            min = num
        }
    }
    return min;
}
console.log(smallestOfThree(2, 5, 3))