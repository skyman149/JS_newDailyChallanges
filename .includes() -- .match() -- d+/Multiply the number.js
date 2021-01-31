function multiply(number){
    let abs = Math.abs(number)
    let numLen = (Math.abs(number)+"").split("").length;
    let result = abs;
    while (numLen > 0){
      result *= 5;
      numLen--;
    }
    return number < 0 ? -result : result;
  }
  //--