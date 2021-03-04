function sumOrProduct(array, n) {
  
    let sorted = array.sort((a, b) => b - a);
    let sum = sorted.slice(0, n).reduce((cur, acu) => cur + acu, 0);
    let product = sorted.reverse().slice(0, n).reduce((cur, acu) => cur * acu, 1); 
    
    return sum === product ? "same": sum > product ? "sum" : "product";
  }