function addAndSubtract(a, b, c) {
    function sum(a1, b1) {
        return a1 + b1;
    }
    function subtract(sumF, c1) {
        return sumF - c1;
    }
    let sumF = sum(a, b);
    let total = subtract(sumF, c);
    return total;
}
console.log(addAndSubtract(23, 6, 10))