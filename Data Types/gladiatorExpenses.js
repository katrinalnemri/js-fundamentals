function gladiatorExpenses(lost, helmet, sword, shield, armor) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    let armorShield = 0;
    let lostCount = 0;

    while (lostCount !== lost) {
        lostCount++;
        if (lostCount % 2 === 0) {
            helmetCount++;
        }
        if (lostCount % 3 === 0) {
            swordCount++;
        }
        if (lostCount % 2 === 0 && lostCount % 3 === 0) {
            shieldCount++;
            armorShield++;
        }
        if (armorShield % 2 === 0 && armorShield > 0) {
            armorCount++;
            armorShield = 0;
        }
    }
    let result = (helmetCount * helmet) + (swordCount * sword) + (shieldCount * shield) + (armorCount * armor);
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)