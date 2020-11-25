function makeMatrix(m,n){
  
    let digits = String(m);
    let arr = Array(n);
    
    for(let i = 0; i < n; i++){
      arr[i] = Array(n);
    }
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        if (i ===j || i + j === n-1){
          arr[i][j] = +digits[0];
        } else if (i < j && i + j < n-1){
          arr[i][j] = +digits[1];
        } else if (i < j && i + j > n-1){
          arr[i][j] = +digits[4];
        } else if (i > j && i + j > n-1){
          arr[i][j] = +digits[2];
        } else {
          arr[i][j] = +digits[3];
        }
      }
    }
    arr = arr.map(el => el.join(' '))
    return arr.join('\n');
  }