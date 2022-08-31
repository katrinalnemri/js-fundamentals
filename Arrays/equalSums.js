function equalSums(arr) {
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j];
        }
        for (let k = 0; k < i; k++) {
            sumLeft += arr[k];
        }
        if (sumRight === sumLeft) {
            isEqual = true;
            console.log(i);
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])