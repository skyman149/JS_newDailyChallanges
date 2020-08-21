function differenceMaxMin(arr){
    if (arr.length===0){return null}
    else {return Math.max(...arr) - Math.min(...arr)};
  }