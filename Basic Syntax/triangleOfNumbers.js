function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let triangle = "";
        for (let k = 1; k <= i; k++) {
            triangle += i + " ";
        }
        console.log(triangle)
    }
}
triangleOfNumbers(6)