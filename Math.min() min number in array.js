function min(arr){
    return Math.min(...arr) === Infinity? []:Math.min(...arr);
  }
console.log(min([0, 1, -5, 999]));