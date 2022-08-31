function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let catsArr = [];
    for (let part of arr) {
        let [newName, newAge] = part.split(" ");
        let newCat = new Cat(newName, newAge);
        catsArr.push(newCat);
    }

    catsArr.forEach(cat => cat.meow());

}
cats(['Mellow 2', 'Tom 5'])