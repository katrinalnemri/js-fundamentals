function spiralMatrix(n, n1) {
    let matrix = n * n1;
    let mainArr = [];
    let row = 0;
    let col = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let secArr = new Array(n).fill(0);
        mainArr.push(secArr);
    }
    for (let main = 0; main < matrix;) {
        while (col + count < n) {
            main++;
            mainArr[row][col] = main;
            col++;
        }
        col--;
        row++;
        while (row + count < n) {
            main++;
            mainArr[row][col] = main;
            row++;
        }
        row--;
        col--;
        while (col >= count) {
            main++;
            mainArr[row][col] = main;
            col--;
        }
        col++;
        row--;
        count++;
        while (row >= count) {
            main++;
            mainArr[row][col] = main;
            row--;
        }
        row++;
        col++;
    }
    for (let line = 0; line < n; line++) {
        console.log(mainArr[line].join(" "))
    }
}
spiralMatrix(2, 2)