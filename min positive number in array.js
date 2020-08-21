function minPositive(arr){
    let minArr = [];
    for (let i = 0; i<arr.length; i++){
      if (arr[i]>=0){
        minArr.push(arr[i]);
      }
    }
    return Math.min(...minArr);
  }
//console.log(minPositive([3, 6, 8, -4, -3, 2, 16])); //2