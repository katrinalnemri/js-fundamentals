function songs(arr) {
    let num = arr.shift();
    let last = arr.pop();

    class Songs {
        constructor(type, name, time) {
            this.type = type,
                this.name = name,
                this.time = time
        }
    }
    let list = [];
    for (let line of arr) {
        let [type, name, time] = line.split("_");
        let song = new Songs(type, name, time);
        list.push(song);
    }
    if (last === "all") {
        list.forEach((s) => console.log(s.name))
    } else {
        let filtered = list.filter((s) => s.type === last);
        filtered.forEach((s) => console.log(s.name))
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favouritee_Smooth Criminal_4:01',
    'all']
)