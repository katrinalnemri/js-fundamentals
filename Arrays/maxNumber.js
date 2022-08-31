function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isBigger = false;
        let first = arr[i];
        for (let j = i + 1; j < arr.length + 1; j++) {
            let second = arr[j];
            if (first <= second) {
                isBigger = false;
                break;
            } else if (first > second || first === arr[arr.length - 1]) {
                isBigger = true;
            }
        }
        if (isBigger) {
            newArr.push(first);
        }
    }
    console.log(newArr.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])