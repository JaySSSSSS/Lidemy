function capitalize(str) {
    let result = ''
    result += str[0].toUpperCase()
    for (i = 1; i < str.length; i++) {
        result += str[i]
    }
    return result
}

console.log(capitalize('nick'))

console.log(capitalize('Nick'))

console.log(capitalize(',hello'))