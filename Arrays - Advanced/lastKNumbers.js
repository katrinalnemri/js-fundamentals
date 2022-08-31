function lastKnumbers(n, k) {
    let newArr = [1];
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        let b = i;
        if (newArr.length >= k) {
            sum = 0;
            for (let j = 0; j < k; j++) {
                sum += newArr[b];
                b--;
            }
        }
        else {
            sum += newArr[i];
        }
        newArr.push(sum);
    }
    newArr.map(Number);

    console.log(newArr.join(" "));
}
lastKnumbers(8, 2)