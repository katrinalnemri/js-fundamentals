function sequences(arr) {
    let obj = {}
    arr = arr.map(el => JSON.parse(el))
    arr.forEach(element => element.sort((a, b) => b - a));

    for (let el of arr) {
        obj[el] = el
    }

    let newArr = Object.values(obj)
    newArr.sort((a, b) => a.length - b.length).forEach(array => {
        console.log(`[${obj[array].join(", ")}]`)
    })

}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)