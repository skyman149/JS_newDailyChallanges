multiplicationTable = function(size) {
    let arr = [];
    for (let i = 1; i <=size; i++){
      let inArr = [];
      for (let j = 1; j <= size; j++){
        let res = i*j;
        inArr.push(res);
      }
      arr.push(inArr);
     }
    return arr;
    }
  