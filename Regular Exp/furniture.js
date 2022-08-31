function furniture(arr) {
    let totalPrice = 0

    console.log("Bought furniture:")
    for (let line of arr) {
        let regEx = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g
        if (line === 'Purchase') {
            break;
        }
        let m = regEx.exec(line)
        if (m) {
            console.log(m.groups.furniture)
            totalPrice += m.groups.price * m.groups.quantity
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)