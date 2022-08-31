function loadingBar(num) {
    let a = num / 10;
    let newArr = new Array(10).slice(0, a).fill("%");
    for (let i = a; i < 10; i++) {
        newArr.push(".");
    }
    if (num < 100) {
        console.log(`${num}% [${newArr.join("")}]`)
        console.log("Still loading...")
    } else {
        console.log(`${num}% Complete!`)
        console.log(`[${newArr.join("")}]`)
    }
}

loadingBar(0)