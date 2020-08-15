function sumsInArray(arr){
    let nArr = [];
    for (let i = 0; i<arr.length; i++){
      let sum = 0;
      for (let j = 0; j<arr[i].length; j++){
        sum += arr[i][j];
      }
      nArr.push(sum)
    }
    return nArr;
  }
 
  console.log(sumsInArray([[1, 0, 0], [2, 2]])); // [1,4]
  