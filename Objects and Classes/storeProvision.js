function storeProvision(stocks, delivery) {
    let products = {};
    let currentL = stocks.length;
    let deliveryL = delivery.length;

    for (let i = 0; i < currentL; i += 2) {
        let product = stocks[i];
        products[product] = Number(stocks[i + 1]);
    }
    for (let i = 0; i < deliveryL; i += 2) {
        let product = delivery[i];

        if (!products.hasOwnProperty(product)) {
            products[product] = 0;
        }
        products[product] += Number(delivery[i + 1])
    }
    for (let product in products) {
        console.log(`${product} -> ${products[product]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )