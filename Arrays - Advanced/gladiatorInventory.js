function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let [com, eq] = arr[i].split(" ");
        if (com === "Buy") {
            if (!inventory.includes(eq)) {
                inventory.push(eq);
            }
        }
        else if (com === "Trash") {
            if (inventory.includes(eq)) {
                inventory.splice(inventory.indexOf(eq), 1)
            }
        }
        else if (com === "Repair") {
            if (inventory.includes(eq)) {
                let repaired = inventory.splice(inventory.indexOf(eq), 1).join("");
                inventory.push(repaired);
            }
        }
        else if (com === "Upgrade") {
            let [eqq, upg] = eq.split("-")
            if (inventory.includes(eqq)) {
                let upgrade = `${eqq}:${upg}`;
                inventory.splice(inventory.indexOf(eqq) + 1, 0, upgrade);
            }
        }
    }
    console.log(inventory.join(" "))
}

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade SWORD-V']
)