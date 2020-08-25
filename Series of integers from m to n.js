function generateIntegers(m, n) {
    let arr = [];
    for (let i = m; i<=n; i++){
      arr.push(i);
    }
    return arr;
  }

  //OR

  function generateIntegers(m, n) {
    var arr = [];
    while(m <= n) {
      arr.push(m);
      m++;
    }
    return arr;
  }