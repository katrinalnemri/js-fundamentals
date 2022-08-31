function employees(arr) {
    let person = {};
    for (let line of arr) {
        let num = line.length;
        person.name = line;
        person.num = num;
        console.log(`Name: ${person.name} -- Personal Number: ${person.num}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)