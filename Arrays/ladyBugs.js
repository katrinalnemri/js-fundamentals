function ladyBugs(arr) {
  let cell = arr.shift();
  let positions = arr.shift().split(" ");
  let newArr = new Array(cell).fill(0);
  for (const position of positions) {
    if (position < 0 || position >= cell) {
      continue;
    }
    newArr[position] = 1;

  }
  for (let i = 0; i < arr.length; i++) {
    let [index, direction, step] = arr[i].split(" ");
    index = +index;
    step = +step;
    if (newArr[index] !== 1 || index < 0 || index >= newArr.length) {
      continue;
    }
    newArr[index] = 0;
    if (direction === "left") {
      step = -step;
    }
    index += step;
    while (index >= 0 && index < newArr.length) {
      if (newArr[index] === 0) {
        newArr[index] = 1;
        break;
      }
      index += step;
    }
  }
  console.log(newArr.join(" "))
}

ladyBugs([3, '0 1 5',
  '0 right 1',
  '2 right 1']


)