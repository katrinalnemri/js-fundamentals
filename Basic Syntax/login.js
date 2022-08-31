function login(words) {
    let username = words.shift();

    for (let i = 0; i < words.length; i++) {
        let reversed = words[i];
        let password = "";
        for (let j = reversed.length - 1; j >= 0; j--) {
            password += reversed[j];
        }
        if (password !== username) {
            if (i >= 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }else{
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}
//login(['Acer','login','go','let me in','recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])