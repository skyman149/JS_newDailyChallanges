function findDeletedNumber(arr, mixArr) {
    let arr1 = arr.reduce((acc, cur) => acc + cur, 0);
    let mixArr1 = mixArr.reduce((acc, cur) => acc + cur, 0);
    return arr1 - mixArr1;
  }