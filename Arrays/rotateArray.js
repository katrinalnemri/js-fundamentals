function rotateArray(arr) {

    let n = Number(arr.pop());

    for (let i = 0; i < n; i++) {
        let shiftedNum = arr.pop();
        arr.unshift(shiftedNum);
    }
    console.log(arr.join(" "))
}
rotateArray(['1', '2', '3', '4', '2'])