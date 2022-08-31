function bunnyKill(arr) {
    let cells = arr.pop().split(' ').map(str => str.split(',').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));

    let damage = 0;
    let kills = 0;

    for (let i = 0; i < cells.length; i++) {
        let row = cells[i][0];
        let col = cells[i][1];
        let bomb = matrix[row][col];

        if (bomb <= 0) {
            continue;
        }

        let start = Math.max(0, row - 1);
        let end = Math.min(row + 1, arr.length - 1);

        for (let i = start; i <= end; i++) {
            let startCol = Math.max(0, col - 1);
            let endCol = Math.min(col + 1, arr[i].length - 1);

            for (let j = startCol; j <= endCol; j++) {
                matrix[i][j] -= bomb;
            }
        }

        kills++;
        damage += bomb;
    }

    for (let k = 0; k < matrix.length; k++) {
        for (let g = 0; g < matrix[k].length; g++) {
            if (matrix[k][g] > 0) {
                damage += matrix[k][g];
                kills++;
            }
        }
    }

    console.log(damage);
    console.log(kills);
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
)