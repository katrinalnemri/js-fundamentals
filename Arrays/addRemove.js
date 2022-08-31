function addRemove(arr) {
    let array = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'add') {
            array.push(i + 1);
        }
        if (arr[i] === 'remove') {
            array.pop();
        }
    }
    if (array.length === 0) {
        console.log('Empty')
    } else {
        console.log(array.join(" "))
    }
}
addRemove(['add', 'add', 'add', 'add'])