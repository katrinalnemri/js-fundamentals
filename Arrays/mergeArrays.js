function mergeArrays(arr1, arr2) {
    let sum = 0;
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            sum = Number(arr1[i]) + Number(arr2[i]);
            arr3.push(sum);
        } else {
            arr3.push(arr1[i] + arr2[i])
        }
        sum = 0;
    }
    console.log(arr3.join(" - "))
}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']

)