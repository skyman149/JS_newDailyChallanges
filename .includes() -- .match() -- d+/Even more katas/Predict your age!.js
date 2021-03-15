function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]*arr[i]);
    }
    let result = res.reduce((acc, cur) => acc + cur, 0)
    
    return Math.floor(Math.sqrt(result) / 2);
  }

  // OR

  function predictAge(...age){
    let arr = [...age]
     return Math.floor(Math.sqrt(arr.map(el => el * el).reduce((a, b) => a + b)) / 2);
   }