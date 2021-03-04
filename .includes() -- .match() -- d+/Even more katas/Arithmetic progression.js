function arithmeticSequenceElements(a,r,n) {
  
    let res = [a];
    
    for (let i = 1; i < n; i++) {
      a += r;
      res.push(a);
    }
    
    return res.join(', ');
  }