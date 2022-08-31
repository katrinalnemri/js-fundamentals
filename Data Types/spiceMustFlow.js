function spiceMustFlow(start) {
    let counter = 0;
    let total = 0;
    let spice = 0;
    while (start >= 100) {
        counter++;
        spice = start;
        spice -= 26;
        total += spice;
        start -= 10;
    }
    if (spice > 26) {
        total -= 26;
    }
    console.log(counter);
    console.log(total)
}
spiceMustFlow(450)