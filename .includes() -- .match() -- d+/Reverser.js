function reverse(n){
    let rev = 0
  
      while (n > 0) {
          rev *= 10
          rev += n % 10
          n -= n % 10
          n /= 10
      }
  
      return rev;
  }