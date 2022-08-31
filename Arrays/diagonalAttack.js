function diagonalAttack(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').map(Number);
        newArr.push(arr[i]);
    }
    let mainDiagonal = newArr.map((x, j) => x[j]).reduce((a, b) => a + b)
    let secDiagonal = newArr.map((y, x) => y[y.length - x - 1]).reduce((a, b) => a + b)
    if (mainDiagonal === secDiagonal) {
    for (let row = 0; row < newArr.length; row++) {
        for (let col = 0; col < newArr[0].length; col++) {
                if (row !== col && row != newArr[0].length - 1 - col) {
                    newArr[row][col] = mainDiagonal;
                }
        }
    }
}
    for (let arrs of newArr) {
        console.log(arrs.join(" "));
    }
    console.log(arr[5])
}
diagonalAttack(
['1 1 1',
'1 1 1',
'1 1 0']
)