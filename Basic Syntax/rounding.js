function rounding(number, precision) {
    if (precision <= 15) {
        console.log(parseFloat(number.toFixed(precision)))
    } else {
        console.log(parseFloat(number.toFixed(15)))
    }
}
rounding(3.1415926535897002384626433832795, 18)