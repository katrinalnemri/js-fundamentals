function arrayRotation(arr, count) {
    for (let i = 0; i < count; i++) {
        let last = arr.shift();
        arr.push(last);
    }
    console.log(arr.join(" "))
}
arrayRotation([2, 4, 15, 31], 5)