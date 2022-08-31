function emojiDetector(arr) {
    let regEx = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let validList = arr[0].matchAll(regEx)
    let coolness = 1
    let coolEmojis = []
    let digits = /\d/
    let count = 0

    arr[0].split("").forEach(digit => {
        if (digits.exec(digit) !== null) {
            coolness *= Number(digit)
        }
    })
    console.log(`Cool threshold: ${coolness}`)

    for (let validEmoji of validList) {
        count++
        let emojiCoolness = (validEmoji.groups.emoji).split("").map(x => x.charCodeAt(0)).reduce((a, b) => a + b)
        if (emojiCoolness > coolness) {
            coolEmojis.push(validEmoji[0])
        }
    }

    console.log(`${count} emojis found in the text. The cool ones are:`)
    coolEmojis.forEach(coolEmoji => console.log(coolEmoji))
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])