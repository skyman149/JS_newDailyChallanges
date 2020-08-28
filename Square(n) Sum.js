function squareSum(numbers){
    let sqSum = 0;
    for (let el of numbers){
      sqSum += Math.pow(el, 2);
    }
    return sqSum;
  }