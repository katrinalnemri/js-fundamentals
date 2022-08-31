function charactersInRange(a, b) {
    let start = a.charCodeAt(0);
    let end = b.charCodeAt(0);
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    let result = [];
    for (let i = min; i < max; i++) {
        if (i !== min && i !== max) {
            result.push(String.fromCharCode(i));
        }
    }
    return result.join(" ")
}
console.log(charactersInRange('#',
    ':'
))