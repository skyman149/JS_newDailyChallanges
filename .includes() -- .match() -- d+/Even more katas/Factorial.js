function factorial(n) {
  
    if (n < 0 || n > 12) throw new RangeError("n must be between 0 and 1.")
    
    let result = 1;
    
    while (n >= 1) {
      result *= n;
      n--;
    }
    
    return result;
    
  }

  // OR

  function factorial(n) {
  
    if (n < 0 || n > 12) throw new RangeError("n must be between 0 and 1.")
    
    return n <= 1 ? 1 : n * factorial(n - 1);
    
  }