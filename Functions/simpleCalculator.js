function simpleCalculator(a, b, operator) {
    let result = "";
    switch (operator) {
        case "multiply":
            result = (a, b) => a * b;
            break;
        case "divide":
            result = (a, b) => a / b;
            break;
        case "add":
            result = (a, b) => a + b;
            break;
        case "subtract":
            result = (a, b) => a - b;
            break;
    }
    return result(a, b);
}
console.log(simpleCalculator(5, 5, "multiply"))