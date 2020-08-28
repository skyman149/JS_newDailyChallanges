function positiveSum(arr) {
    let sum = 0;
    for (let el of arr){
      if (el>0){sum+=el}
    }
    return sum;
  }