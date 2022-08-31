function addAndSubtract(arr) {
    let newArr = [];
    let newEven = 0;
    let newOdd = 0;
    let sum = 0;
    let newSum = 0;
    for (const num of arr) {
        sum += num;
        if (num % 2 === 0) {
            newEven = num;
            newEven += arr.indexOf(num);
            newArr.push(newEven);
        } else {
            newOdd = num;
            newOdd -= arr.indexOf(num);
            newArr.push(newOdd);
        }
    }
    for (const num of newArr) {
        newSum += num;
    }
    console.log(newArr)
    console.log(sum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])