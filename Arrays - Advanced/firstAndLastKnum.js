function firstAndLastKnum(arr) {
    let k = arr.shift();

    let firstArr = arr.slice(0, k);
    let secondArr = arr.slice(arr.length - k, arr.length);

    console.log(firstArr.join(" "))
    console.log(secondArr.join(" "))

}

firstAndLastKnum([2,
    6, 7, 8, 9])