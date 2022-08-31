function softUniBar(arr) {
    let total = 0
    for (let line of arr) {
        if (line === "end of shift") {
            console.log(`Total income: ${total.toFixed(2)}`)
            break;
        }
        let regEx = /%(?<customer>[A-Z][a-z]+)%([^$%\.\|]+)?<(?<product>\w+)>([^$%\.\|]+)?\|(?<count>\d+)\|([^$%\.\|\d]+)?(?<price>\d+(\.\d*)?)\$/g

        let validLine = regEx.exec(line)
        if (validLine) {
            let customerPrice = validLine.groups.count * validLine.groups.price
            total += customerPrice
            console.log(`${validLine.groups.customer}: ${validLine.groups.product} - ${customerPrice.toFixed(2)}`)
        }
    }
}
softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']

)