function arrayManipulator(arr, str) {
    let int = arr.slice(0);
    for (let i = 0; i < str.length; i++) {
        int = int.map(Number);
        let com, index, el, el2;
        let part = str[i].split(" ")
        com = part.shift();
        if (com === "add") {
            index = part[0];
            el = part[1];
            int.splice(index, 0, el)
        }
        if (com === "addMany") {
            index = part.shift();
            int.splice(index, 0, ...part)
        }
        if (com === "contains") {
            el = Number(part[0]);
            if (int.includes(el)) {
                console.log(int.indexOf(el));
            } else {
                console.log("-1");
            }
        }
        if (com === "remove") {
            index = part[0];
            int.splice(index, 1);
        }
        if (com === "shift") {
            el = part[0];
            for (let i = 0; i < el; i++) {
                let shifted = int.shift();
                int.push(shifted);
            }
        }
        let newArr = [];
        if (com === "sumPairs") {
            for (let i = 0; i < int.length; i++) {
                if (i + 1 >= int.length) {
                    newArr.push(int[i]);
                } else {
                    int[i] = int[i] + int[i + 1];
                    newArr.push(int[i]);
                }
                i++;
            }
            int = newArr;
        }
        if (com === "print") {

            break;
        }
    }
    return "[ " + int.join(", ") + " ]"
}
console.log(arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])
)