function partyTime(arr) {
    let vipObj = {};
    let regularObj = {};

    let list = arr.slice(0, arr.indexOf('PARTY'));
    let arriving = arr.slice(arr.indexOf('PARTY') + 1, arr.length);

    let index = 0;

    for (let guest of list) {
        if (isNaN(guest[0])) {
            regularObj[index] = guest;
            index++;
        } else {
            vipObj[index] = guest;
            index++;
        }
    }
    let vip = Object.values(vipObj);
    let regular = Object.values(regularObj);

    for (let guest of arriving) {
        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1)
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1)
        }
    }

    console.log(vip.length + regular.length);

    vip.forEach((el) => {
        console.log(el)
    })

    regular.forEach((el) => {
        console.log(el)
    })

}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]

)