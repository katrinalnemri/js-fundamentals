function towns(arr) {
    let person = {};
    for (let line of arr) {
        let [town, latitude, longitude] = line.split(" | ");
        person.town = town;
        person.latitude = Number(latitude).toFixed(2);
        person.longitude = Number(longitude).toFixed(2);
        console.log(person)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)