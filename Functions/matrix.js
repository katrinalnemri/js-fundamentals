function matrix(n) {
    let newArr = [];
    let rowArr = new Array(n).fill(n);
    for (let i = 0; i < n; i++) {
        newArr.push(rowArr);
    }
    for (let row of newArr) {
        console.log(row.join(" "))
    }
}
matrix(3)