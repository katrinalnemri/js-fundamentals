function browserHistory(obj, arr) {

    for (let line of arr) {
        let [command, site] = line.split(" ")
        if (command === "Close") {
            if (obj["Open Tabs"].includes(site)) {
                obj["Open Tabs"].splice(obj["Open Tabs"].indexOf(site), 1)
                obj["Recently Closed"].push(site)
                obj["Browser Logs"].push(line)
            }
        }
        if (command === "Open") {
            obj["Open Tabs"].push(site)
            obj["Browser Logs"].push(line)
        }
        if (line === "Clear History and Cache") {
            obj["Open Tabs"] = []
            obj["Recently Closed"] = []
            obj["Browser Logs"] = []
        }
    }
    console.log(obj["Browser Name"])
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`)
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`)
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`)
}
browserHistory(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)