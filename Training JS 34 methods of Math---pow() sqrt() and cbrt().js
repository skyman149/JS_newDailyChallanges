function cutCube(volume,n){
    const isOK = x => (Math.round(Math.cbrt(x)) ** 3 === x);
     return isOK(volume / n) && isOK(n);
 }

 //OR

 function cutCube(volume,n){
    return Math.round(Math.cbrt(volume / n)) ** 3 === volume/n && Math.round(Math.cbrt(n)) ** 3 === n;
  }