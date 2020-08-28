function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){return [];}
    let count = 0;
    let sum = 0;
    for (let el of input){
      if(el>0){count++}
      if(el<0){sum+=el}
    }
    return [count, sum];
  }