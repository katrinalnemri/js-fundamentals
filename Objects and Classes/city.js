function city(obj) {
    let info = Object.entries(obj);
    for (let [key, value] of info) {
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)