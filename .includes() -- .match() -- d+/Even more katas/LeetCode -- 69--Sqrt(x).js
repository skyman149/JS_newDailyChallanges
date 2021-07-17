var mySqrt = function(x) {
    
    let min;
    
    if (x === 0) return 0
    
    for (let i = 0; i <= x; i++){
      if (i*i === x){
        return i;
      } 
      else if(i*i < x){
        min = i;
      } else {
        return min;
      }
    }
    
};