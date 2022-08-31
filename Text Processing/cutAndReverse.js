function cutAndReverse(str) {
    let first = str.substring(0, str.length / 2).split("").reverse()
    let second = str.substring(str.length / 2, str.length).split("").reverse()

    console.log(first.join(""))
    console.log(second.join(""))

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')