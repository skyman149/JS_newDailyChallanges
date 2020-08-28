function oddOrEven(array) {
    let sum = 0;
    for (let el of array){
      sum += el;
    }
    return sum % 2 ===0? 'even':'odd';
  }