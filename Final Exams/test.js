function solve(input) {
    let plantsNum = Number(input.shift());
    let plantsStorage = {};
 
    for (let i = 0; i < plantsNum; i++) {
        let [plant, rarity] = input.shift().split("<->");
 
        if (!plantsStorage[plant]) {
            plantsStorage[plant] = {};
            plantsStorage[plant].rarity ;
            plantsStorage[plant].raiting = [];
           
        }
        plantsStorage[plant].rarity = Number(rarity);
    }
    let [command, ...tokens] = input.shift().split(": ");
    while (command !== "Exhibition") {
 
        //console.log(tokens[0].split(" - "));
        let [plant, num] = tokens[0].split(" - ");
        //console.log(plant)
        if (command === "Rate") {
            if (plantsStorage[plant]) {
                plantsStorage[plant].raiting.push(Number(num));
            } else {
                console.log('error');
            }
        } else if (command === "Update") {
            if (plantsStorage[plant]) {
                plantsStorage[plant].rarity = Number(num);
            } else {
                console.log('error');
            }
        } else if (command === "Reset") {
            if (plantsStorage[plant]) {
                plantsStorage[plant].raiting = [0];
            } else {
                console.log('error');
            }
        } else if (command === "Exhibition") {
            break;
        }
        [command, ...tokens] = input.shift().split(": ");
    }
 
    console.log(`Plants for the exhibition:`)
    for (let el in plantsStorage) {
        for (let property in plantsStorage[el]) {
            if (property === "raiting") {
                plantsStorage[el].raiting = Number(getAverrage(plantsStorage[el].raiting)).toFixed(2);
            }
 
        }
    }
    let result = Object.keys(plantsStorage)//.forEach(x => {
    //plantsStorage[x].raiting = getAverrage(plantsStorage[x].raiting)})
    result = result.sort((a, b) =>
        plantsStorage[b].rarity - plantsStorage[a].rarity ||
        plantsStorage[b].raiting - plantsStorage[a].raiting)
        .forEach(el => console.log(`- ${el}; Rarity: ${plantsStorage[el].rarity}; Rating: ${plantsStorage[el].raiting}`));
 
    function getAverrage(arr) {
        arr = arr.map(Number);
        let len = arr.length;
        if(len > 0){
        return arr.reduce((a, b) => ((a + b) / len));
    }else{
        return 0;
    }
    }
}
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 0",
    "Rate: Candelabra - 6",
    "Rate: Candelabra - 3",
    "Rate: Candelaba - 0",
    "Exhibition"])