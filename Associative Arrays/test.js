function travelTime(arr){
    let obj = {}
    let [country, city, price] = ""
    arr.forEach(line => {
        [country, city, price] = line.split(" > ");

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {}
        }

        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = price;
        }

        let prevPrice = obj[country][city];

        if (prevPrice > price) {
            obj[country][city] = price;
        }
    });

    let result = "";
    let thePrice = Object.keys(obj)
        for (let key of thePrice) {
            result += `${key} -> ${obj[country][city]}`
        }

        let newArr = Object.keys(obj).sort((a, b) => a.localeCompare(b));

        for (let country of newArr) {
            console.log(`${country} -> ${result}`);
        }

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )