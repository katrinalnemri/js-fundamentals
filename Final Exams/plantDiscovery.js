function plantDiscovery(input) {
    let num = input.shift()
    let plantsList = {}
    for (let plant of input) {
        if (plant === "Exhibition") {
            console.log("Plants for the exhibition:")
            Object.keys(plantsList).forEach(el => {
                if (plantsList[el].rating.length > 0) {
                    plantsList[el].average = ((plantsList[el].rating).reduce((a, b) => a + b, 0) / plantsList[el].rating.length).toFixed(2)
                } else {
                    plantsList[el].average = "0.00"
                }
            })
            Object.keys(plantsList).sort((a, b) => plantsList[b].rarity - plantsList[a].rarity ||
                plantsList[b].average - plantsList[a].average).forEach(el => {
                    console.log(`- ${el}; Rarity: ${plantsList[el].rarity}; Rating: ${plantsList[el].average}`)
                })
            break;
        }
        if (plant.includes("<->")) {
            let [name, rarity] = plant.split("<->")
            if (!plantsList.hasOwnProperty(name)) {
                plantsList[name] = {}
                plantsList[name].rating = []
            }
            plantsList[name].rarity = rarity
        } else {
            plant = plant.split(/[:\s-]+/)
            let command = plant[0]
            let plantName = plant[1]
            if (command === "Rate") {
                if (plantsList.hasOwnProperty(plantName)) {
                    let rate = Number(plant[2])
                    plantsList[plantName].rating.push(rate)
                } else {
                    console.log("error")
                }
            }
            if (command === "Update") {
                if (plantsList.hasOwnProperty(plantName)) {
                    let newRarity = plant[2]
                    plantsList[plantName].rarity = newRarity
                } else {
                    console.log("error")
                }
            }
            if (command === "Reset") {
                if (plantsList.hasOwnProperty(plantName)) {
                    plantsList[plantName].rating = []
                } else {
                    console.log("error")
                }
            }
        }
    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
