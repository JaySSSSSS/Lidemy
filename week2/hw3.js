function reverse(str) {
    let result = ''
    for (i = str.length -1; i >= 0; i--) {
        result += str[i]
    }
  console.log(result)
}

reverse('yoyoyo')

reverse('1abc2')

reverse('1,2,3,2,1')