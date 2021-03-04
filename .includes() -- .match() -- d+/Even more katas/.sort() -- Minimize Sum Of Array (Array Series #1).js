function minSum(arr) {
  
    let sortedArr = arr.sort((a, b) => a-b);
    let res = 0;
    
    for (let i = 0; i < sortedArr.length; i++) {
      let x = sortedArr[i] * sortedArr[sortedArr.length-1]
      res += x;
      sortedArr.pop(sortedArr[sortedArr.length-1]);
    }
    
    return res;
  }