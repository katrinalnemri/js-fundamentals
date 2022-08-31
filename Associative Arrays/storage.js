function storage(arr) {
    let storage = new Map()

    arr.forEach(element => {
        let [product, quantity] = element.split(" ")
        if (!storage.has(product)) {
            storage.set(product, Number(quantity))
        } else {
            let currentQuantity = storage.get(product)
            let newQuantity = currentQuantity += Number(quantity)
            storage.set(product, newQuantity)
        }
    });

    for (let [product, quantity] of [...storage.entries()]) {
        console.log(`${product} -> ${quantity}`)
    }

}

storage(
    ['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40']
)