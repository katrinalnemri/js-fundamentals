function equalNeighbors(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i]
        for (let j = 0; j < row.length; j++) {
            let col = row[j]
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    count++
                }
                if (col === arr[i + 1][j]) {
                    count++
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                count++
            }
        }
    }
    console.log(count)
}
equalNeighbors([['test', 'yes', 'yes', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yo', '5']]
)