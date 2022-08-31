function searchForAnumber(arr, arr2) {
    let taken = arr2[0];
    let deleted = arr2[1];
    let num = arr2[2];

    let newArr = arr.slice(0, taken)
    newArr.splice(0, deleted);
    let count = 0;
    for (let n of newArr) {
        if (n === num) {
            count++;
        }
    }
    console.log(`Number ${num} occurs ${count} times.`)
}

searchForAnumber([7, 5, 5, 8, 2, 7],
    [3, 1, 5]

)