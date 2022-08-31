function sortNumbers(first, second, third) {
    let arr = [];
    arr.push(first, second, third);
    arr.sort((a, b) => b - a);

    console.log(arr.join("\n"));
}
sortNumbers(0, 0, 2)