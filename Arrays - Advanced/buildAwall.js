function buildAwall(arr) {
    let total = 0;
    let newArr = [];
    let sum = 1;
    
    while (true) {
        let isFalse = true;
        let yards = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i] += 1;
                yards += 195;
            } else {
                //arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
        for(let num of arr){
            if(num !== 30){
                isFalse = false;
                break;
            }
        }
        if (arr.length > 0) {
            newArr.push(yards)
        }
        yards *= 1900;
        total += yards;
        if(isFalse){
            break;
        }
    }
    console.log(newArr.join(", "));
    console.log(`${total} pesos`)
}

buildAwall([17,
    22,
    17,
    19,
    17])