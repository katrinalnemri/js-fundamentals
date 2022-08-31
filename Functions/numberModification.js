function numberModification(num) {
    num = num.toString().split("").map(Number)
    let sum = 0;
    while (sum < 5) {
        let tempSum = 0;
        for (let i = 0; i < num.length; i++) {
            tempSum += num[i];
        }
        sum = tempSum / num.length;
        if (sum >= 5) {
            break;
        }
        num.push(9);
    }
    console.log(num.join(""))
}

numberModification(5835)