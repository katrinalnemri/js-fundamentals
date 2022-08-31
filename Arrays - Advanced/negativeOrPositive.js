function negativeOrPositive(arr) {
    let newArr = [];
    arr = arr.map(Number);
    for (let num of arr) {
        if (num >= 0) {
            newArr.push(num);
        } else {
            newArr.unshift(num);
        }
    }
    console.log(newArr.join("\n"))
}

negativeOrPositive(['7', '-2', '8', '9'])