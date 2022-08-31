function inventory(arr) {
    let newArr = [];
    for (let line of arr) {
        let [name, level, items] = line.split(" / ");
        items = items.split(", ");
        let hero = {
            name: name,
            level: Number(level),
            items: items.sort((a, b) => a.localeCompare(b)).join(", "),
        }
        newArr.push(hero);
    }
    newArr.sort((a, b) => a.level - b.level);

    for (let a of newArr) {
        console.log(`Hero: ${a.name}`);
        console.log(`level => ${a.level}`);
        console.log(`items => ${a.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]


)