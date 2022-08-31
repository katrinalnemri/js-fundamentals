function convertToObject(obj) {
    let person = JSON.parse(obj);
    let info = Object.entries(person);
    info.forEach(entry => { console.log(entry.join(": ")) })
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')