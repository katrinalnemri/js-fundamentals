function flightSchedule(arr) {
    let destinations = arr[0]
    let changes = arr[1]
    let status = arr[2].join("")

    let flights = {}

    for (let flight of destinations) {
        let [a, b] = flight.split(" ")
        if (!flights.hasOwnProperty(a)) {
            flights[a] = {}
            flights[a].Destination = b
            flights[a].Status = "Ready to fly"
        }
    }
    for (let change of changes) {
        let [a, b] = change.split(" ")
        if (flights.hasOwnProperty(a)) {
            flights[a].Status = b
        }
    }
    let flightsValues = Object.values(flights)

    for (let obj of flightsValues) {
        if (obj.Status === status) {
            console.log(obj)
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Cancelled']
]

)