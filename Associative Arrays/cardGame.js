function cardGame(arr) {
    let obj = {};

    let mapped = {
        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14
        },
        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1
        }
    }

    for (let el of arr) {
        let [name, hands] = el.split(": ")
        if (obj[name]) {
            hands.split(", ").forEach((card) => {
                obj[name].add(card)
            })
        } else {
            obj[name] = new Set(hands.split(", "))
        }
    }


    Object.keys(obj).forEach(key => {
        let hands = obj[key]
        let sum = 0
        hands.forEach((card) => {
            let x = card.split("")
            let color = x.pop()
            let y = x.join("")

            if (!mapped.p[y]) {
                p = Number(y)
            } else {
                p = mapped.p[y]
            }
            sum += p * (mapped.t[color])

        })
        console.log(`${key}: ${sum}`);

    });
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])

