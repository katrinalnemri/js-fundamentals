function extractFile(str) {
    let file = str.split('\\')
    let last = file[file.length - 1]
    let extension = last.substring(last.lastIndexOf('.') + 1, last.length)
    let name = last.substring(0, last.lastIndexOf('.'))

    console.log(`File name: ${name}`)
    console.log(`File extension: ${extension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.docs.pptx')