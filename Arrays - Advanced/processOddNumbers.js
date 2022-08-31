function processOddNumbers(arr) {
    let newArr = [];
    arr.filter((x, index, arr) => {
        if (index % 2 !== 0) {
            newArr.push(arr[index])
        }
    })
    let multipliedArr = newArr.map(x => x * 2)
    console.log(multipliedArr.reverse().join(" "))
}

processOddNumbers([10, 15, 20, 25])