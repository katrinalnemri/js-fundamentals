function biggest3Nums(a, b, c) {
    let max = Number.MIN_SAFE_INTEGER;
    let arr = [];
    arr.push(a, b, c);
    for (const num of arr) {
        if (max < num) {
            max = num;
        }
    }
    console.log(max)
}
biggest3Nums(43,
    43.2,
    43.1
)