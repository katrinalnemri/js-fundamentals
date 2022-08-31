function nonDecreasingSubsequence(arr) {
    console.log(arr.filter((element, index) => element >= Math.max(...arr.slice(0, index))).join(' '));
}
nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])