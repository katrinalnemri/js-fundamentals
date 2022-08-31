function oddAndEvenSum(num) {
    let odds = odd(num);
    let evens = even(num);
    function even(a) {
        let evenSum = 0;
        a = a.toString();
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 === 0) {
                evenSum += Number(a[i]);
            }
        }
        return evenSum;
    }

    function odd(a) {
        let oddSum = 0;
        a = a.toString();
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 !== 0) {
                oddSum += Number(a[i]);
            }
        }
        return oddSum;
    }
    return `Odd sum = ${odds}, Even sum = ${evens}`;
}
console.log(oddAndEvenSum(3495892137259234))