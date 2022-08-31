function magicSum(arr, number) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = 0;
        for (let j = i + 1; j < arr.length; j++) {
            next = arr[j];
            sum = current + next;
            if (sum === number) {
                console.log(current, next)
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
)