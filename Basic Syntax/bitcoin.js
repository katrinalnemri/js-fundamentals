function bitcoin(shifts) {
    bitcoinPrice = 11949.16;
    gramGold = 67.51;
    let gold = 0;
    let bitcoin = 0;
    let index = 0;
    let counter = 0;
    let day = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while (counter < shifts.length) {
        counter++;
        let shift = shifts[index++];
        if (counter % 3 === 0) {
            shift *= 0.7;
        }
        gold += gramGold * shift;

        if (gold >= bitcoinPrice) {
            day = counter;
            if (min > day) {
                min = day;
            }
        }
    }
    if (gold >= bitcoinPrice) {
        bitcoin = Math.floor(gold / bitcoinPrice);
        gold = gold - (bitcoinPrice * bitcoin);
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${min}`);
    }
    console.log(`Left money: ${gold.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124])