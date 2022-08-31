function orbit(arr) {
    let x = arr[2];
    let y = arr[3];

    let newArr = [];

    for (let j = 0; j < arr[0]; j++) {
        let inArr = new Array(arr[0]).fill(0);
        newArr.push(inArr);
    }
    for (let row = 0; row < arr[0]; row++) {
        for (let col = 0; col < arr[1]; col++) {
            newArr[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;;
        }
    }

    for (let row of newArr) {
        console.log(row.join(" "))
    }
}

orbit([5, 5, 2, 2])