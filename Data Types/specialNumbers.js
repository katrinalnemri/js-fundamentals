function specialNumbers(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let a = i.toString();
        for (let j = 0; j < a.length; j++) {
            sum += Number(a[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            result = 'True';
        } else {
            result = 'False';
        }
        console.log(`${i} -> ${result}`);
    }
}
specialNumbers(20)