function sumArray(array) {
    if (array === null || array.length == 0 || array.length == 1){return 0}
    let max = array[0];
    let min = array[0];
    let sum = 0;
    for (let i = 0; i<array.length; i++){
      sum += array[i];
      if(array[i]>max){max=array[i]}
      if(array[i]<min){min=array[i]}
    }
    return sum - max - min;
  }