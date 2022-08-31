function matchPhoneNumber(str) {
    let regExp = /(\+359[-][2][-]\d{3}[-]\d{4}\b)|(\+359[' '][2][' ']\d{3}[' ']\d{4}\b)/g
    let phones = []

    while ((phoneNumber = regExp.exec(str)) !== null) {
        phones.push(phoneNumber[0])
    }

    console.log(phones.join(", "))
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")