function sorting(arr) {
    let newArr = [];
    let workingArr = arr.slice();
    for (let i = 0; i < workingArr.length; i++) {
        let num = 0;
        if (i % 2 === 0) {
            num = Math.max(...arr)
            newArr.push(num);
            arr.splice(arr.indexOf(num), 1)
        } else {
            num = Math.min(...arr);
            newArr.push(num)
            arr.splice(arr.indexOf(num), 1)
        }
    }
    console.log(newArr.join(" "))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])