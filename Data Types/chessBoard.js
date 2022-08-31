function chessBoard(n) {
    let color = 'black';
    let color2 = '';
    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= n; rows++) {
        console.log('  <div>');

        for (let columns = 1; columns <= n; columns++) {
            console.log(`    <span class="${color}"></span>`);

            color2 = color;
            color = color2 === 'black' ? 'white' : 'black';
        }

        console.log('  </div>');
        if (n % 2 === 0) {
            color2 = color;
            color = color2 === 'black' ? 'white' : 'black'
        }
    }

    console.log('</div>')
}
chessBoard(1)