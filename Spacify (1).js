function spacify(str) {
    let nStr = '';
    for(let i = 0; i<str.length-1; i++){nStr += str[i]+' '}
    return nStr + str[str.length-1];
  }

  //  https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript