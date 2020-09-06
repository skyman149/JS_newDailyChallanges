function digits(n) {
    let str = n.toString()
    let count = 0;
    let i = str.length
    while (i > 0){
      count++;
      i--;
    }
    return count;
  }