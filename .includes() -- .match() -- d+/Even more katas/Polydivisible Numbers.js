function polydivisible(x) {
  
    let str = x.toString();
    for (let i = 1; i <= str.length; i++) {
      if (+str.slice(0, i) % i !== 0) return false
    }
    
    return true;
  }