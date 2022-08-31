function phoneBook(arr){
    let phonebook = {};
    for(let a of arr){
        let [name,number] = a.split(" ");
        phonebook[name]=number
    }
    for(let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)