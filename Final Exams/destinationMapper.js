function destinationMapper(str) {
    let regex = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g
    let validList = str.matchAll(regex)
    let totalPoints = 0
    let list = []
    for (let line of validList) {
        line = line.groups.destination
        let linePoints = line.length
        totalPoints += linePoints
        list.push(line)
    }

    console.log(`Destinations: ${list.join(", ")}`)
    console.log(`Travel Points: ${totalPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
