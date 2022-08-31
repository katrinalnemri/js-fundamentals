function arenaTier(arr) {
    let gladiators = {}

    for (let line of arr) {
        if (line === 'Ave Cesar') {
            break;
        }
        if (line.includes('vs')) {
            let [first, second] = line.split(" vs ")
            if (gladiators.hasOwnProperty(first) && gladiators.hasOwnProperty(second)) {
                for (let tech in gladiators[first]) {
                    if (gladiators[second].hasOwnProperty(tech)) {
                        if (Number(gladiators[first][tech]) > Number(gladiators[second][tech])) {
                            delete gladiators[second];
                            break;
                        } else if (Number(gladiators[first][tech]) < Number(gladiators[second][tech])) {
                            delete gladiators[first];
                            break;
                        }
                    }
                }
            }
        } else if (line.includes('->')) {
            let [name, technique, skill] = line.split(' -> ')
            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {}
            }
            if (!gladiators[name].hasOwnProperty(technique) || gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill
            }
        }
    }

    for (let a in gladiators) {
        let totalSkill = 0;

        for (let b in gladiators[a]) {
            totalSkill += Number(gladiators[a][b])
        }
        gladiators[a].total = totalSkill
    }
    Object.entries(gladiators).sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0]))
        .forEach(el => {
            console.log(`${el[0]}: ${el[1].total} skill`);
            delete el[1].total
            Object.entries(el[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(el => {
                    console.log(` - ${el[0]} <!> ${el[1]}`)
                })
        })
}


arenaTier([
    'Pesho -> Duck -> 700',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 350',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar',
]
)