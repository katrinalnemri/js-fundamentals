function springVacation(input) {
    input = input.map(Number)
    let days = input.shift()
    let budget = input.shift()
    let group = input.shift()
    let priceKm = input.shift()
    let foodPerson = input.shift()
    let hotelPerson = input.shift()

    let diff = 0
    let hotelTotal = hotelPerson * group * days

    if (group > 10) {
        hotelTotal = hotelTotal * 0.75
    }

    let foodTotal = foodPerson * group * days

    let expenses = foodTotal + hotelTotal;

    for (let i = 1; i <= days; i++) {
        let dailyKm = input.shift()
        let dailyFuel = priceKm * dailyKm
        expenses += dailyFuel

        if (i % 3 === 0 || i % 5 === 0) {
            expenses += expenses * 0.4
        }

        if (i % 7 === 0) {
            expenses -= expenses / group
        }

        diff = Math.abs(budget - expenses).toFixed(2)
        if (expenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${diff}$ more.`)
            break
        }
    }
    if (budget >= expenses) {
        console.log(`You have reached the destination. You have ${diff}$ budget left.`)
    }
}
springVacation(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"])


