function join(arr, str) {
    let result = ''
    for(i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i !== arr.length -1) {
            result += str
        }
    }
    return result
}

function repeat(str, n) {
    let result = ''
    for(i = 0; i < n; i++) {
        result += str
    }
    return result
} 


console.log(join([1, 2, 3], ''))

console.log(join(['a', 'b', 'c'], '!'))

console.log(join(['a', 1, 'b',  2, 'c', 3], ','))

console.log(repeat('a', 5))

console.log(repeat('yoyo', 2))
