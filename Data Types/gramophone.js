function gramophone(band, album, song) {
    let songDuration = Number(album.length) * Number(band.length) * Number(song.length) / 2;
    let rotation = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)
}

gramophone('Rammstein', 'Sehnsucht', 'Engel')