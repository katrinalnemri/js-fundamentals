function signCheck(a, b, c) {
    let result = "";
    if ((a >= 0 && b >= 0 && c >= 0) || (a >= 0 && b < 0 && c < 0) || (b >= 0 && a < 0 && c < 0) || (c >= 0 && b < 0 && a < 0)) {
        result = "Positive";
    } else {
        result = "Negative";
    }
    return result;
}
console.log(signCheck(-6, 12, -14))