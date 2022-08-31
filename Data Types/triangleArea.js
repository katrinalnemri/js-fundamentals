function triangleArea(a, b, c) {
    let half = (a + b + c) / 2;
    let area = Math.sqrt(half * (half - a) * (half - b) * (half - c))
    console.log(area)
}
triangleArea(2,
    3.5,
    4
)