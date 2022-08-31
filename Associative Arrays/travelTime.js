function travelTime(arr) {
    let obj = {}

    arr.forEach(element => {
        let [country, city, price] = element.split(" > ")

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {}
        }
        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = Number(price)
        }
        let prevPrice = obj[country][city]
        if (prevPrice > price) {
            obj[country][city] = price
        }
    });

    let sortCountries = Object.keys(obj).sort((a, b) =>
        a.localeCompare(b))
    let line = ""
    sortCountries.forEach(el => {
        line += el + " -> "
        let sortPrice = Object.keys(obj[el]).sort((a, b) => {
            return obj[el][a] - obj[el][b]
        })

        sortPrice.forEach((result) => {
            line += `${result} -> ${obj[el][result]} `
        })
        line += "\n"
    })
    console.log(line)
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)