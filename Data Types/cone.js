function cone(r, h) {
    let v = Math.PI * Math.pow(r, 2) * h / 3;
    let a = (Math.PI * r * Math.sqrt((Math.pow(r, 2) + Math.pow(h, 2)))) + (Math.PI * Math.pow(r, 2));
    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${a.toFixed(4)}`);
}
cone(3, 5)