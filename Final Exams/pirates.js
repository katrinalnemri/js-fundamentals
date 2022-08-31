function pirates(arr) {
    let citiesArr = arr.slice(0, arr.indexOf("Sail"))
    let actionsArr = arr.slice(arr.indexOf("Sail") + 1, arr[arr.length])
    let cities = {}

    for (let line of citiesArr) {
        let [city, population, gold] = line.split("||")
        if (!cities.hasOwnProperty(city)) {
            cities[city] = {}
            cities[city].population = Number(population)
            cities[city].gold = Number(gold)
        } else {
            cities[city].population += Number(population)
            cities[city].gold += Number(gold)
        }
    }
    for (let line of actionsArr) {
        if (line === "End") {
            if (Object.keys(cities).length > 0) {
                console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`)
                Object.entries(cities).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0])).forEach(el =>
                    console.log(`${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`)
                )
            } else {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
            }
            break;
        }
        line = line.split("=>")
        let command = line[0]
        if (command === "Plunder") {
            let town = line[1]
            let people = line[2]
            let gold = line[3]
            if (cities.hasOwnProperty(town)) {
                cities[town].population -= Number(people)
                cities[town].gold -= Number(gold)
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    delete cities[town]
                    console.log(`${town} has been wiped off the map!`)
                }
            }
        }
        if (command === "Prosper") {
            let town = line[1]
            let gold = line[2]
            if (cities.hasOwnProperty(town)) {
                if (gold >= 0) {
                    cities[town].gold += Number(gold)
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
                } else {
                    console.log("Gold added cannot be a negative number!")
                }
            }
        }
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

