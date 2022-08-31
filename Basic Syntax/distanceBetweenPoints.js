function distanceBetweenPoints(x1, y1, x2, y2) {
    let first = Math.pow(x2 - x1, 2);
    let second = Math.pow(y2 - y1, 2);
    let distance = Math.sqrt(first + second);
    console.log(distance)
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)