function piccolo(arr) {
    let obj = {}

    for (let el of arr) {
        let [command, num] = el.split(", ");
        if (command === 'IN') {
            if (!obj.hasOwnProperty(num)) {
                obj[num] = '';
            }
        } else {
            delete obj[num];
        }
    }

    let keys = Object.keys(obj);
    if (keys.length > 0) {
        keys = keys.sort();
        for (let el of keys) {
            console.log(el)
        }
    } else {
        console.log('Parking Lot is Empty')
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)