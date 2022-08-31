function passwordValidator(pass) {
    function lettersAndDigits(pass) {
        let isCorrect = true;
        for (let symbol of pass) {
            symbol = symbol.charCodeAt(0);
            if (symbol < 48 || symbol > 57 && symbol < 65 || symbol > 90 && symbol < 97 || symbol > 122) {
                isCorrect = false;
            }
        }
        return isCorrect ? "" : `Password must consist only of letters and digits\n`
    }
    function twoDigits(pass) {
        let count = 0;
        for (let num of pass) {
            num = Number(num);
            if (Number.isInteger(num)) {
                count++;
            }
        }
        if (count < 2) {
            return `Password must have at least 2 digits\n`;
        } else {
            return "";
        }
    }
    function passLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            return `Password must be between 6 and 10 characters\n`
        } else {
            return ""
        }
    }

    let result = passLength(pass) + lettersAndDigits(pass) + twoDigits(pass);
    return result ? result : "Password is valid"
}

console.log(passwordValidator('logIn'))