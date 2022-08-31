function catalogue(arr) {
    class Catalogue {
        constructor(name, price) {
            this.name = name,
                this.price = price
        }
    }
    let newArr = [];
    for (let line of arr) {
        let [name, price] = line.split(" : ");
        let newObj = new Catalogue(name, price);
        newArr.push(newObj);
    }
    newArr.sort((a, b) => a.name.localeCompare(b.name));

    let letter = "";
    newArr.forEach((a) => {
        if (a.name.charAt(0) === letter) {
            console.log(`${a.name}: ${a.price}`);
        } else {
            letter = a.name.charAt(0).toUpperCase();
            console.log(letter);
            console.log(`${a.name}: ${a.price}`);
        }
    })
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)