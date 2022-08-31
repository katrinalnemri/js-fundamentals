function matchName(str) {
    let regexp = /(\b[A-Z][a-z]+[ ][A-Z][a-z]+\b)/g
    let arr = []

    while ((fullName = regexp.exec(str)) !== null) {
        arr.push(fullName[0])
    }
    console.log(arr.join(" "))
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")