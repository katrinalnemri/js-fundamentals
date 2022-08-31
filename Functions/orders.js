function orders(product, count) {
    let price = 0;
    switch (product) {
        case "coffee":
            price = 1.50;
            break;
        case "coke":
            price = 1.40;
            break;
        case "water":
            price = 1.00;
            break;
        case "snacks":
            price = 2.00;
            break;
    }
    return (price * count).toFixed(2)
}
console.log(orders("water", 5))