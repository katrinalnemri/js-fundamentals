function pyramidOfKingDjoser(base, increment) {
    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    while (base > 2) {
        height++;
        let singleStone = Math.pow((base - 2), 2) * increment;
        stone += singleStone;

        if (height % 5 !== 0) {
            let singleMarble = ((base * 4) - 4) * increment;
            marble += singleMarble;
        }
        if (height % 5 === 0) {
            let singleLapis = ((base * 4) - 4) * increment;
            lapis += singleLapis;
        }
        base -= 2;

    }
    height++;
    let gold = base * base * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
pyramidOfKingDjoser(23, 0.5)