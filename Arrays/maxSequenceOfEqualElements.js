function maxSequenceOfEqualElements(arr) {
    let longest = [];
    let leftIndex = 0;
    let current = "";
    for (let i = 0; i < arr.length; i++) {
        current = Number(arr[i]);
        let sequence = [current];
        for (let j = i + 1; j < arr.length; j++) {
            let next = Number(arr[j]);
            if (next === current) {
                sequence.push(next)
            } else {
                break;
            }
        }
        if (sequence.length > longest.length) {
            longest = [];
            for (let k = 0; k < sequence.length; k++) {
                longest.push(sequence[k]);
            }
        } else if (sequence.length === longest.length) {
            if (i < leftIndex) {
                leftIndex = i;
            }
        }
    }
    console.log(longest.join(' '));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])