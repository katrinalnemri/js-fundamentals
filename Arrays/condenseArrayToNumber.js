function condenseArrayToNumber(arr) {
    let condensed = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr.length === 1) {
            console.log(arr.join(" "));
        }
        if (i < arr.length - 1) {
            let num = arr[i] + arr[i + 1];
            condensed.push(num);
        } else {
            arr = condensed;
            condensed = [];
            if (arr.length > 1) {
                i = -1;
            } else {
                break;
            }
        }
    }
    console.log(arr.join(" "))
}
condenseArrayToNumber([2, 10, 3])