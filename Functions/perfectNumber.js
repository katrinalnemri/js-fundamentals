function perfectNumber(num) {
    function sum(num) {
        let result = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                result += i;
            }
        }
        return result;
    }
    let sumF = sum(num);
    if (num === sumF) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(1236498)