function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2).sort((a,b)=>a-b);
    return arr.filter((el, i) => arr.indexOf(el) === i);
  }