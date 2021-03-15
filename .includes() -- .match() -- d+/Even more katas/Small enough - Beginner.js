function smallEnough(a, limit){
    return a.every((el, i) => a[i] <= limit);
  }