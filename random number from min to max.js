function integerFromMinToMax(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  }
  console.log(integerFromMinToMax(1,5));
  