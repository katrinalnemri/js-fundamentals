function rightPlace(string, char, word) {
    let replaced = string.replace('_', char);
    let result = replaced === word ? 'Matched' : 'Not Matched';
    console.log(result)
}
rightPlace('Str_ng', 'I', 'Strong')