function tSeamAccount(arr) {
    let newArr = arr[0].split(" ");
    while (true) {
        let [action, game] = arr.shift().split(" ");
        if (action === "Play!") {
            break;
        }
        if (action === "Install") {
            if (!newArr.includes(game)) {
                newArr.push(game);
            }
        }
        if (action === "Update") {
            if (newArr.includes(game)) {
                newArr.splice(newArr.indexOf(game), 1);
                newArr.push(game);
            }
        }
        if (action === "Uninstall") {
            if (newArr.includes(game)) {
                newArr.splice(newArr.indexOf(game), 1);
            }
        }
        if (action === "Expansion") {
            let expanded = game.split("-");
            game = expanded[0];
            if (newArr.includes(game)) {
                newArr.splice(newArr.indexOf(game) + 1, 0, expanded.join(":"));
            }
        }
    }
    console.log(newArr.join(" "));
}
tSeamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

)