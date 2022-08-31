function fancyBarcodes(input) {
    let count = input.shift()
    for (let barcode of input) {
        let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g
        let digits = /\d/
        let group = "00"
        if (pattern.exec(barcode) !== null) {
            if (digits.exec(barcode) !== null) {
                group = ""
                barcode.split("").forEach(char => {
                    if (digits.exec(char) !== null) {
                        group += char
                    }
                }
                )
            }
            console.log(`Product group: ${group}`)
        } else {
            console.log(`Invalid barcode`)
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

