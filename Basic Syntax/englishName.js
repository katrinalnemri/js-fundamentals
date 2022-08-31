function englishName(number) {
    let num = number.toString();
    let last = num[num.length - 1];
    let name = "";

    switch (last) {
        case "1":
            name = "one";
            break;
        case "2":
            name = "two";
            break;
        case "3":
            name = "three";
            break;
        case "4":
            name = "four";
            break;
        case "5":
            name = "five";
            break;
        case "6":
            name = "six";
            break;
        case "7":
            name = "seven";
            break;
        case "8":
            name = "eight";
            break;
        case "9":
            name = "nine";
            break;
        case "0":
            name = "zero";
            break;
    }
    console.log(name)
}
englishName(512)