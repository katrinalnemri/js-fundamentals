function heroesOfCodeAndLogic(input) {
    let heroesCount = input.shift()
    let heroes = {}
    for (let line of input) {
        if (line === "End") {
            Object.keys(heroes).sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b)).forEach(el => {
                console.log(el)
                console.log(`  HP: ${heroes[el].hp}`)
                console.log(`  MP: ${heroes[el].mp}`)
            })
        }
        if (!line.includes("-")) {
            line = line.split(" ")
            let heroName = line[0]
            let heroHp = line[1]
            let heroMp = line[2]
            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = {}
                heroes[heroName].hp = Number(heroHp)
                heroes[heroName].mp = Number(heroMp)
                if (heroes[heroName].hp > 100) {
                    heroes[heroName].hp = 100
                }
                if (heroes[heroName].mp > 200) {
                    heroes[heroName].mp = 200
                }
            }
        } else {
            line = line.split(" - ")
            let command = line[0]
            let hero = line[1]
            if (command === "CastSpell") {
                let mpNeeded = line[2]
                let spell = line[3]
                if (heroes[hero].mp >= mpNeeded) {
                    heroes[hero].mp -= Number(mpNeeded)
                    console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`)
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spell}!`)
                }
            }
            if (command === "TakeDamage") {
                let damage = line[2]
                let attacker = line[3]
                heroes[hero].hp -= Number(damage)
                if (heroes[hero].hp > 0) {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`)
                } else {
                    delete heroes[hero]
                    console.log(`${hero} has been killed by ${attacker}!`)
                }

            }
            if (command === "Recharge") {
                let ammount = line[2]
                let prevMp = heroes[hero].mp
                heroes[hero].mp += Number(ammount)
                if (heroes[hero].mp > 200) {
                    heroes[hero].mp = 200
                }
                console.log(`${hero} recharged for ${heroes[hero].mp - prevMp} MP!`)
            }
            if (command === "Heal") {
                let ammount = line[2]
                let prevHp = heroes[hero].hp
                heroes[hero].hp += Number(ammount)
                if (heroes[hero].hp > 100) {
                    heroes[hero].hp = 100
                }
                console.log(`${hero} healed for ${heroes[hero].hp - prevHp} HP!`)
            }

        }
    }
}
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])