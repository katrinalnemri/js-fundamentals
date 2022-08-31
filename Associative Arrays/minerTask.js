function minerTask(arr) {
    let mine = {}

    for (let i = 0; i < arr.length; i += 2) {
        let key = arr[i];
        let value = arr[i + 1];
        if (!mine.hasOwnProperty(key)) {
            mine[key] = 0;
        }
        let a = Number(mine[key]);
        a += Number(value);
        mine[key] = a;
    }

    for (let key in mine) {
        console.log(`${key} -> ${mine[key]}`)
    }
}

minerTask([
    'Gold',
    '155',
    'Gold',
    '15',
    'Silver',
    '10',
    'Gold',
    '15',
    'Copper',
    '17'
])