function systemsRegister(arr) {
    let obj = {};

    for (let line of arr) {
        let [system, component, subcomponent] = line.split(' | ');
        if (!obj.hasOwnProperty(system)) {
            obj[system] = {};
        }
        if (!obj[system].hasOwnProperty(component)) {
            obj[system][component] = [];
        }
        obj[system][component].push(subcomponent);
    }

    let keys = Object.keys(obj).sort((a, b) => Object.keys(obj[b]).length - Object.keys(obj[a]).length || a.localeCompare(b));

    keys.forEach((key) => {
        console.log(key);
        let subKeys = Object.keys(obj[key]).sort((a, b) => Object.keys(obj[key][b]).length - Object.keys(obj[key][a]).length);
        subKeys.forEach((subKey) => {
            console.log(`|||${subKey}`);
            obj[key][subKey].forEach((subC) => {
                console.log(`||||||${subC}`);
            });
        });
    });

}

systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
)